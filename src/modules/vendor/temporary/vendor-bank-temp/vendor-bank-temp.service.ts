import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorBankTempDto } from './dto/create-vendor-bank-temp.dto';
import { UpdateVendorBankTempDto } from './dto/update-vendor-bank-temp.dto';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { VendorBankTemp } from './entities/vendor-bank-temp.entity';
import { VendorBank } from '@modules/vendor/vendor-bank/entities/vendor-bank.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORBANKTEMP_FIELDS } from './query/vendor-bank-temp-field.meta';
import { VendorBankTempMapper } from './mapper/vendor-bank-temp.mapper';
import { BaseDraftCrudService } from '../common/base-draft-crud.service';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';
import { VendorTempAction } from '@common/enums';

@Injectable()
export class VendorBankTempService extends BaseDraftCrudService<VendorBank, VendorBankTemp> {
    constructor(
        @InjectRepository(VendorBank) masterRepo: Repository<VendorBank>,
        @InjectRepository(VendorBankTemp) tempRepo: Repository<VendorBankTemp>,
        vendorTempService: VendorTempService,
    ) {
        super(masterRepo, tempRepo, vendorTempService);
    }

    protected masterIdField: keyof VendorBankTemp = 'vendorBankId';

    protected mapMasterToTemp(master: VendorBank, vendorTempId: number, action: string): Partial<VendorBankTemp> {
        return {
            vendorTempId,
            vendorBankId: master.id,
            action,
            bankBranchId: master.bankBranchId,
            currencyId: master.currencyId,
            accountName: master.accountName,
            accountNumber: master.accountNumber,
            fileId: master.fileId,
        };
    }

    async create(vendorId: number, data: CreateVendorBankTempDto) {
        return this.createDraft(vendorId, data as any);
    }

    async update(vendorId: number, id: number, data: UpdateVendorBankTempDto, isMaster: boolean) {
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
            .leftJoinAndSelect('m.bankBranch', 'bankBranch')
            .leftJoinAndSelect('bankBranch.bank', 'bank')
            .leftJoinAndSelect('bank.country', 'country')
            .leftJoinAndSelect('m.currency', 'currency')
            .leftJoinAndSelect('m.file', 'file');

        const tempQb = this.tempRepo.createQueryBuilder('t')
            .innerJoin('t.vendorTemp', 'vendorTemp', 'vendorTemp.vendorId = :vendorId', { vendorId })
            .leftJoinAndSelect('t.createdByUser', 'createdByUser')
            .leftJoinAndSelect('t.updatedByUser', 'updatedByUser')
            .leftJoinAndSelect('t.vendorBank', 'vendorBank')
            .leftJoinAndSelect('t.bankBranch', 'bankBranch')
            .leftJoinAndSelect('bankBranch.bank', 'bank')
            .leftJoinAndSelect('bank.country', 'country')
            .leftJoinAndSelect('t.currency', 'currency')
            .leftJoinAndSelect('t.file', 'file');

        const mapToResponse = (entity: any, source: 'MASTER' | 'TEMP', action: string | null) => {
            const masterId = source === 'MASTER' ? entity.id : entity.vendorBankId;
            const tempId = source === 'TEMP' ? entity.id : null;
            
            let id = null;
            if (source === 'MASTER') id = masterId;
            else if (source === 'TEMP' && action === VendorTempAction.UPDATE) id = masterId;
            else if (source === 'TEMP' && action === VendorTempAction.CREATE) id = tempId;

            const res = source === 'TEMP' 
                ? VendorBankTempMapper.toResponse(entity) 
                : VendorBankTempMapper.toResponse({ ...entity, vendorBankId: entity.id } as any);
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
                relations: ['createdByUser', 'updatedByUser', 'bankBranch', 'currency', 'file'],
            });
            if (!item) throw new NotFoundException();
            const res = VendorBankTempMapper.toResponse({ ...item, vendorBankId: item.id } as any);
            return { ...res, masterId: item.id, tempId: null, source: 'MASTER', action: null, id: item.id };
        } else {
            const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
            const item = await this.tempRepo.findOne({
                where: { id, vendorTempId: vendorTemp.id } as any,
                relations: ['createdByUser', 'updatedByUser', 'bankBranch', 'currency', 'file'],
            });
            if (!item) throw new NotFoundException();
            const res = VendorBankTempMapper.toResponse(item);
            
            const masterId = item.vendorBankId;
            const tempId = item.id;
            let finalId: number | undefined | null = tempId;
            if (item.action === VendorTempAction.UPDATE) {
                finalId = masterId;
            }
            return { ...res, masterId, tempId, source: 'TEMP', action: item.action, id: finalId };
        }
    }
}
