import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorUserTempDto } from './dto/create-vendor-user-temp.dto';
import { UpdateVendorUserTempDto } from './dto/update-vendor-user-temp.dto';
import { Repository } from 'typeorm';
import { VendorUserTemp } from './entities/vendor-user-temp.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORUSERTEMP_FIELDS } from './query/vendor-user-temp-field.meta';
import { VendorUserTempMapper } from './mapper/vendor-user-temp.mapper';
import { BaseDraftCrudService } from '../common/base-draft-crud.service';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';
import { VendorTempAction } from '@common/enums';

@Injectable()
export class VendorUserTempService extends BaseDraftCrudService<User, VendorUserTemp> {
    constructor(
        @InjectRepository(User) masterRepo: Repository<User>,
        @InjectRepository(VendorUserTemp) tempRepo: Repository<VendorUserTemp>,
        vendorTempService: VendorTempService,
    ) {
        super(masterRepo, tempRepo, vendorTempService);
    }

    protected masterIdField: keyof VendorUserTemp = 'vendorUserId';

    protected mapMasterToTemp(master: User, vendorTempId: number, action: string): Partial<VendorUserTemp> {
        return {
            vendorTempId,
            vendorUserId: master.id,
            action,
            firstname: master.firstname,
            lastname: master.lastname,
            username: master.username,
            email: master.email,
            jobTitle: master.jobTitle,
            positionId: master.position?.id || (master as any).positionId,
            effectiveStartDate: master.effectiveStartDate,
            effectiveEndDate: master.effectiveEndDate,
            phone: master.phone,
            areaIds: master.areaIds,
            // Assuming we don't map userHasRoles directly, or we leave it empty.
        };
    }

    async create(vendorId: number, data: CreateVendorUserTempDto) {
        return this.createDraft(vendorId, data as any);
    }

    async update(vendorId: number, id: number, data: UpdateVendorUserTempDto, isMaster: boolean) {
        // Exclude 'source' from data when saving
        const { source, ...updateData } = data;
        return this.updateDraft(vendorId, id, updateData as any, isMaster);
    }

    async delete(vendorId: number, id: number, isMaster: boolean) {
        return this.deleteDraft(vendorId, id, isMaster);
    }

    async pagination(vendorId: number, query: PaginationQueryDto) {
        const masterQb = this.masterRepo.createQueryBuilder('m')
            .where('m.vendor_id = :vendorId', { vendorId })
            .leftJoinAndSelect('m.position', 'position');

        const tempQb = this.tempRepo.createQueryBuilder('t')
            .innerJoin('t.vendorTemp', 'vendorTemp', 'vendorTemp.vendorId = :vendorId', { vendorId })
            .leftJoinAndSelect('t.createdByUser', 'createdByUser')
            .leftJoinAndSelect('t.updatedByUser', 'updatedByUser')
            .leftJoinAndSelect('t.vendorUser', 'vendorUser')
            .leftJoinAndSelect('t.position', 'position')
            .leftJoinAndSelect('t.file', 'file');

        const mapToResponse = (entity: any, source: 'MASTER' | 'TEMP', action: string | null) => {
            const masterId = source === 'MASTER' ? entity.id : entity.vendorUserId;
            const tempId = source === 'TEMP' ? entity.id : null;
            
            let id = null;
            if (source === 'MASTER') id = masterId;
            else if (source === 'TEMP' && action === VendorTempAction.UPDATE) id = masterId;
            else if (source === 'TEMP' && action === VendorTempAction.CREATE) id = tempId;

            const res = source === 'TEMP' 
                ? VendorUserTempMapper.toResponse(entity) 
                : VendorUserTempMapper.toResponse({ ...entity, vendorUserId: entity.id } as any);
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
            mapToResponse
        );
    }

    async findOne(vendorId: number, id: number, isMaster: boolean) {
        if (isMaster) {
            const item = await this.masterRepo.findOne({
                where: { id, vendor: { id: vendorId } } as any,
                relations: ['position'],
            });
            if (!item) throw new NotFoundException();
            const res = VendorUserTempMapper.toResponse({ ...item, vendorUserId: item.id } as any);
            return { ...res, masterId: item.id, tempId: null, source: 'MASTER', action: null, id: item.id };
        } else {
            const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
            const item = await this.tempRepo.findOne({
                where: { id, vendorTempId: vendorTemp.id } as any,
                relations: ['createdByUser', 'updatedByUser', 'position', 'file'],
            });
            if (!item) throw new NotFoundException();
            const res = VendorUserTempMapper.toResponse(item);
            
            const masterId = item.vendorUserId;
            const tempId = item.id;
            let finalId: number | undefined | null = tempId;
            if (item.action === VendorTempAction.UPDATE) {
                finalId = masterId;
            }
            return { ...res, masterId, tempId, source: 'TEMP', action: item.action, id: finalId };
        }
    }
}
