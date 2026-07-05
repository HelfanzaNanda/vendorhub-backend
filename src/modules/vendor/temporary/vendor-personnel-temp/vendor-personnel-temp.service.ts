import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VendorPersonnelTemp } from './entities/vendor-personnel-temp.entity';
import { VendorPersonnel } from '@modules/vendor/vendor-personnel/entities/vendor-personnel.entity';
import { CompanyPersonnelType } from '@modules/master/company-personnel-type/entities/company-personnel-type.entity';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';
import { BaseDraftCrudService } from '../common/base-draft-crud.service';
import { VendorTempAction } from '@common/enums';
import { CreateVendorPersonnelTempDto } from './dto/create-vendor-personnel-temp.dto';
import { UpdateVendorPersonnelTempDto } from './dto/update-vendor-personnel-temp.dto';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VendorPersonnelTempMapper } from './mapper/vendor-personnel-temp.mapper';

@Injectable()
export class VendorPersonnelTempService extends BaseDraftCrudService<VendorPersonnel, VendorPersonnelTemp> {
    constructor(
        @InjectRepository(VendorPersonnel)
        protected readonly masterRepo: Repository<VendorPersonnel>,
        @InjectRepository(VendorPersonnelTemp)
        protected readonly tempRepo: Repository<VendorPersonnelTemp>,
        protected readonly vendorTempService: VendorTempService,
        @InjectRepository(CompanyPersonnelType)
        private companyPersonnelType: Repository<CompanyPersonnelType>,
    ) {
        super(masterRepo, tempRepo, vendorTempService);
    }

    protected get masterIdField(): keyof VendorPersonnelTemp {
        return 'vendorPicId';
    }

    protected mapMasterToTemp(master: VendorPersonnel, vendorTempId: number, action: VendorTempAction): Partial<VendorPersonnelTemp> {
        return {
            vendorTempId,
            vendorPicId: master.id,
            action,
            personnelTypeId: master.personnelTypeId,
            titleId: master.titleId,
            name: master.name,
            jobTypeId: master.jobTypeId,
            position: master.position,
            identityTypeId: master.identityTypeId,
            identityNumber: master.identityNumber,
            email: master.email,
            phone: master.phone,
            ownershipPercentage: master.ownershipPercentage,
            privyId: master.privyId,
            enterpriseId: master.enterpriseId,
        };
    }

    async create(vendorId: number, dto: CreateVendorPersonnelTempDto) {
        const personnelType = await this.companyPersonnelType.findOne({
            where: { code: dto.personnelTypeCode },
        });

        if (!personnelType) {
            throw new BadRequestException(`Personnel type '${dto.personnelTypeCode}' not found`);
        }

        const { personnelTypeCode, ...data } = dto;
        (data as any).personnelTypeId = personnelType.id;
        
        return this.createDraft(vendorId, data);
    }

    async update(vendorId: number, id: number, data: UpdateVendorPersonnelTempDto, isMaster: boolean) {
        return this.updateDraft(vendorId, id, data, isMaster);
    }

    async delete(vendorId: number, id: number, isMaster: boolean) {
        return this.deleteDraft(vendorId, id, isMaster);
    }

    async pagination(vendorId: number, query: PaginationQueryDto) {
        const masterQb = this.masterRepo.createQueryBuilder('c')
            .leftJoinAndSelect('c.createdByUser', 'createdByUser')
            .leftJoinAndSelect('c.updatedByUser', 'updatedByUser')
            .leftJoinAndSelect('c.personnelType', 'personnelType')
            .leftJoinAndSelect('c.title', 'title')
            .leftJoinAndSelect('c.jobType', 'jobType')
            .leftJoinAndSelect('c.identityType', 'identityType')
            .where('c.vendorId = :vendorId', { vendorId })
            .andWhere('c.deletedAt IS NULL');

        const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);

        const tempQb = this.tempRepo.createQueryBuilder('c')
            .leftJoinAndSelect('c.createdByUser', 'createdByUser')
            .leftJoinAndSelect('c.updatedByUser', 'updatedByUser')
            .leftJoinAndSelect('c.personnelType', 'personnelType')
            .leftJoinAndSelect('c.title', 'title')
            .leftJoinAndSelect('c.jobType', 'jobType')
            .leftJoinAndSelect('c.identityType', 'identityType')
            .where('c.vendorTempId = :vendorTempId', { vendorTempId: vendorTemp.id })
            .andWhere('c.deletedAt IS NULL');

        if (query.personnelTypeCode) {
            masterQb.andWhere('personnelType.code = :personnelTypeCode', { personnelTypeCode: query.personnelTypeCode });
            tempQb.andWhere('personnelType.code = :personnelTypeCode', { personnelTypeCode: query.personnelTypeCode });
        }

        const mapToResponse = (entity: any, source: 'MASTER' | 'TEMP', action: string | null) => {
            const masterId = source === 'MASTER' ? entity.id : entity.vendorPicId;
            const tempId = source === 'TEMP' ? entity.id : null;
            
            let id = null;
            if (source === 'MASTER') id = masterId;
            else if (source === 'TEMP' && action === VendorTempAction.UPDATE) id = masterId;
            else if (source === 'TEMP' && action === VendorTempAction.CREATE) id = tempId;

            const res = source === 'TEMP' 
                ? VendorPersonnelTempMapper.toResponse(entity) 
                : VendorPersonnelTempMapper.toResponse({ ...entity, vendorPicId: entity.id } as any);
            return {
                ...res,
                id,
                masterId,
                tempId,
                source,
                action: source === 'MASTER' ? null : action
            };
        };

        return this.getMergedPagination(
            vendorId,
            query,
            masterQb,
            tempQb,
            mapToResponse,
            query.sortBy || 'createdAt',
            query.sortDir || 'desc'
        );
    }

    async findOne(vendorId: number, id: number, isMaster: boolean) {
        if (isMaster) {
            const item = await this.masterRepo.findOne({
                where: { id, vendorId } as any,
                relations: ['createdByUser', 'updatedByUser', 'personnelType', 'title', 'jobType', 'identityType'],
            });
            if (!item) throw new NotFoundException();
            const res = VendorPersonnelTempMapper.toResponse({ ...item, vendorPicId: item.id } as any);
            return { ...res, masterId: item.id, tempId: null, source: 'MASTER', action: null, id: item.id };
        } else {
            const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
            const item = await this.tempRepo.findOne({
                where: { id, vendorTempId: vendorTemp.id } as any,
                relations: ['createdByUser', 'updatedByUser', 'personnelType', 'title', 'jobType', 'identityType'],
            });
            if (!item) throw new NotFoundException();
            const res = VendorPersonnelTempMapper.toResponse(item);
            
            const masterId = item.vendorPicId;
            const tempId = item.id;
            let finalId: number | undefined | null = tempId;
            if (item.action === VendorTempAction.UPDATE) {
                finalId = masterId;
            }
            return { ...res, masterId, tempId, source: 'TEMP', action: item.action, id: finalId };
        }
    }
}
