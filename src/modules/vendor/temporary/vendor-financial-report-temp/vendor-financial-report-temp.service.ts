import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorFinancialReportTempDto } from './dto/create-vendor-financial-report-temp.dto';
import { UpdateVendorFinancialReportTempDto } from './dto/update-vendor-financial-report-temp.dto';
import { Repository } from 'typeorm';
import { VendorFinancialReportTemp } from './entities/vendor-financial-report-temp.entity';
import { VendorFinancialReport } from '@modules/vendor/vendor-financial-report/entities/vendor-financial-report.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { VENDORFINANCIALREPORTTEMP_FIELDS } from './query/vendor-financial-report-temp-field.meta';
import { VendorFinancialReportTempMapper } from './mapper/vendor-financial-report-temp.mapper';
import { BaseDraftCrudService } from '../common/base-draft-crud.service';
import { VendorTempService } from '../vendor-temp/vendor-temp.service';
import { VendorTempAction } from '@common/enums';

@Injectable()
export class VendorFinancialReportTempService extends BaseDraftCrudService<VendorFinancialReport, VendorFinancialReportTemp> {
    constructor(
        @InjectRepository(VendorFinancialReport) masterRepo: Repository<VendorFinancialReport>,
        @InjectRepository(VendorFinancialReportTemp) tempRepo: Repository<VendorFinancialReportTemp>,
        vendorTempService: VendorTempService,
    ) {
        super(masterRepo, tempRepo, vendorTempService);
    }

    protected masterIdField: keyof VendorFinancialReportTemp = 'vendorFinancialReportId';

    protected mapMasterToTemp(master: VendorFinancialReport, vendorTempId: number, action: string): Partial<VendorFinancialReportTemp> {
        return {
            vendorTempId,
            vendorFinancialReportId: master.id,
            action,
            reportType: master.reportType,
            year: master.year,
            periodFrom: master.periodFrom,
            periodTo: master.periodTo,
            auditStatus: master.auditStatus,
            fileId: master.fileId,
            currencyId: master.currencyId,
            currentAssets: master.currentAssets,
            totalAssets: master.totalAssets,
            currentLiabilities: master.currentLiabilities,
            totalLiabilities: master.totalLiabilities,
            totalRevenue: master.totalRevenue,
            netProfitLossAfterTax: master.netProfitLossAfterTax,
        };
    }

    async create(vendorId: number, data: CreateVendorFinancialReportTempDto) {
        return this.createDraft(vendorId, data as any);
    }

    async update(vendorId: number, id: number, data: UpdateVendorFinancialReportTempDto, isMaster: boolean) {
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
            .leftJoinAndSelect('m.file', 'file')
            .leftJoinAndSelect('m.currency', 'currency');

        const tempQb = this.tempRepo.createQueryBuilder('t')
            .innerJoin('t.vendorTemp', 'vendorTemp', 'vendorTemp.vendorId = :vendorId', { vendorId })
            .leftJoinAndSelect('t.createdByUser', 'createdByUser')
            .leftJoinAndSelect('t.updatedByUser', 'updatedByUser')
            .leftJoinAndSelect('t.vendorFinancialReport', 'vendorFinancialReport')
            .leftJoinAndSelect('t.file', 'file')
            .leftJoinAndSelect('t.currency', 'currency');

        const mapToResponse = (entity: any, source: 'MASTER' | 'TEMP', action: string | null) => {
            const masterId = source === 'MASTER' ? entity.id : entity.vendorFinancialReportId;
            const tempId = source === 'TEMP' ? entity.id : null;
            
            let id = null;
            if (source === 'MASTER') id = masterId;
            else if (source === 'TEMP' && action === VendorTempAction.UPDATE) id = masterId;
            else if (source === 'TEMP' && action === VendorTempAction.CREATE) id = tempId;

            const res = source === 'TEMP' 
                ? VendorFinancialReportTempMapper.toResponse(entity) 
                : VendorFinancialReportTempMapper.toResponse({ ...entity, vendorFinancialReportId: entity.id } as any);
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
                relations: ['createdByUser', 'updatedByUser', 'file', 'currency'],
            });
            if (!item) throw new NotFoundException();
            const res = VendorFinancialReportTempMapper.toResponse({ ...item, vendorFinancialReportId: item.id } as any);
            return { ...res, masterId: item.id, tempId: null, source: 'MASTER', action: null, id: item.id };
        } else {
            const vendorTemp = await this.vendorTempService.getOrCreateDraft(vendorId);
            const item = await this.tempRepo.findOne({
                where: { id, vendorTempId: vendorTemp.id } as any,
                relations: ['createdByUser', 'updatedByUser', 'file', 'currency'],
            });
            if (!item) throw new NotFoundException();
            const res = VendorFinancialReportTempMapper.toResponse(item);
            
            const masterId = item.vendorFinancialReportId;
            const tempId = item.id;
            let finalId: number | undefined | null = tempId;
            if (item.action === VendorTempAction.UPDATE) {
                finalId = masterId;
            }
            return { ...res, masterId, tempId, source: 'TEMP', action: item.action, id: finalId };
        }
    }
}
