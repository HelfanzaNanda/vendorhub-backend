import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorAffiliationTempDto } from './dto/create-vendor-affiliation-temp.dto';
import { UpdateVendorAffiliationTempDto } from './dto/update-vendor-affiliation-temp.dto';
import { Repository } from 'typeorm';
import { VendorAffiliationTemp } from './entities/vendor-affiliation-temp.entity';
import { VendorAffiliation } from '@modules/vendor/vendor-affiliation/entities/vendor-affiliation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORAFFILIATIONTEMP_FIELDS } from './query/vendor-affiliation-temp-field.meta';
import { VendorAffiliationTempMapper } from './mapper/vendor-affiliation-temp.mapper';
import { BaseDraftCrudService } from '../common/base-draft-crud.service';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';
import { VendorTempAction } from '@common/enums';

@Injectable()
export class VendorAffiliationTempService extends BaseDraftCrudService<VendorAffiliation, VendorAffiliationTemp> {
    constructor(
        @InjectRepository(VendorAffiliation) masterRepo: Repository<VendorAffiliation>,
        @InjectRepository(VendorAffiliationTemp) tempRepo: Repository<VendorAffiliationTemp>,
        vendorTempService: VendorTempService,
    ) {
        super(masterRepo, tempRepo, vendorTempService);
    }

    protected masterIdField: keyof VendorAffiliationTemp = 'vendorAffiliationId';

    protected mapMasterToTemp(master: VendorAffiliation, vendorTempId: number, action: string): Partial<VendorAffiliationTemp> {
        return {
            vendorTempId,
            vendorAffiliationId: master.id,
            action,
            affiliateTypeId: master.affiliateTypeId,
            companyName: master.companyName,
            npwp: master.npwp,
            businessField: master.businessField,
            companyBusinessEntityTypeId: master.companyBusinessEntityTypeId,
        };
    }

    async create(vendorId: number, data: CreateVendorAffiliationTempDto) {
        return this.createDraft(vendorId, data as any);
    }

    async update(vendorId: number, id: number, data: UpdateVendorAffiliationTempDto, isMaster: boolean) {
        // Exclude 'source' from data when saving
        const { source, ...updateData } = data;
        return this.updateDraft(vendorId, id, updateData as any, isMaster);
    }

    async delete(vendorId: number, id: number, isMaster: boolean) {
        return this.deleteDraft(vendorId, id, isMaster);
    }

    async pagination(vendorId: number, query: PaginationQueryDto) {
        const masterQb = this.masterRepo.createQueryBuilder('m')
            .where('m.vendorId = :vendorId', { vendorId })
            .leftJoinAndSelect('m.createdByUser', 'createdByUser')
            .leftJoinAndSelect('m.updatedByUser', 'updatedByUser')
            .leftJoinAndSelect('m.affiliateType', 'affiliateType')
            .leftJoinAndSelect('m.companyBusinessEntityType', 'companyBusinessEntityType');

        const tempQb = this.tempRepo.createQueryBuilder('t')
            .innerJoin('t.vendorTemp', 'vendorTemp', 'vendorTemp.vendorId = :vendorId', { vendorId })
            .leftJoinAndSelect('t.createdByUser', 'createdByUser')
            .leftJoinAndSelect('t.updatedByUser', 'updatedByUser')
            .leftJoinAndSelect('t.vendorAffiliation', 'vendorAffiliation')
            .leftJoinAndSelect('t.affiliateType', 'affiliateType')
            .leftJoinAndSelect('t.companyBusinessEntityType', 'companyBusinessEntityType');

        const mapToResponse = (entity: any, source: 'MASTER' | 'TEMP', action: string | null) => {
            const masterId = source === 'MASTER' ? entity.id : entity.vendorAffiliationId;
            const tempId = source === 'TEMP' ? entity.id : null;
            
            let id = null;
            if (source === 'MASTER') id = masterId;
            else if (source === 'TEMP' && action === VendorTempAction.UPDATE) id = masterId;
            else if (source === 'TEMP' && action === VendorTempAction.CREATE) id = tempId;

            const res = source === 'TEMP' 
                ? VendorAffiliationTempMapper.toResponse(entity) 
                : VendorAffiliationTempMapper.toResponse({ ...entity, vendorAffiliationId: entity.id } as any);
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
                where: { id, vendorId } as any,
                relations: ['createdByUser', 'updatedByUser', 'affiliateType', 'companyBusinessEntityType'],
            });
            if (!item) throw new NotFoundException();
            const res = VendorAffiliationTempMapper.toResponse({ ...item, vendorAffiliationId: item.id } as any);
            return { ...res, masterId: item.id, tempId: null, source: 'MASTER', action: null, id: item.id };
        } else {
            const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
            const item = await this.tempRepo.findOne({
                where: { id, vendorTempId: vendorTemp.id } as any,
                relations: ['createdByUser', 'updatedByUser', 'affiliateType', 'companyBusinessEntityType'],
            });
            if (!item) throw new NotFoundException();
            const res = VendorAffiliationTempMapper.toResponse(item);
            
            const masterId = item.vendorAffiliationId;
            const tempId = item.id;
            let finalId: number | undefined | null = tempId;
            if (item.action === VendorTempAction.UPDATE) {
                finalId = masterId;
            }
            return { ...res, masterId, tempId, source: 'TEMP', action: item.action, id: finalId };
        }
    }
}
