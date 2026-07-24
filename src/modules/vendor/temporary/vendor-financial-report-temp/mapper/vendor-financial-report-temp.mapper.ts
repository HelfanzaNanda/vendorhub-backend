import { VendorFinancialReportTempResponseDto } from '../dto/response-vendor-financial-report-temp.dto';
import { VendorFinancialReportTemp } from '../entities/vendor-financial-report-temp.entity';

export class VendorFinancialReportTempMapper {
    static toResponse(
            entity: VendorFinancialReportTemp,
        ): VendorFinancialReportTempResponseDto {
            return {
                id: entity.id,
                vendorTempId: entity.vendorTempId ?? null,
                vendorFinancialReportId: entity.vendorFinancialReportId ?? null,
                action: entity.action ?? null,
                reviewStatus: entity.reviewStatus ?? null,
                reviewNotes: entity.reviewNotes ?? null,
                reportType: entity.reportType ? {
                    id: entity.reportType,
                    name: entity.reportType
                } : null,
                year: entity.year ? {
                    id: entity.year,
                    name: entity.year
                } : null,
                financialPeriod: entity.financialPeriod ? { 
                    id: entity.financialPeriod.id, 
                    name: entity.financialPeriod.name 
                } : null,
                periodFrom: entity.periodFrom ?? null,
                periodTo: entity.periodTo ?? null,
                auditStatus: entity.auditStatus ? {
                    id: entity.auditStatus,
                    name: entity.auditStatus
                } : null,
                fileId: entity.fileId ?? null,
                file: entity.file ? {
                    id: entity.file.id,
                    originalName: entity.file.originalFileName,
                    filename: entity.file.fileName,
                    mimeType: entity.file.mimeType,
                    size: entity.file.fileSize,
                    uuid : entity.file.uuid
                } : null,
                currencyId: entity.currencyId ?? null,
                currency: entity.currency ? { id: entity.currency.id, name: entity.currency.name } : null,
                currentAssets: entity.currentAssets ?? null,
                totalAssets: entity.totalAssets ?? null,
                currentLiabilities: entity.currentLiabilities ?? null,
                totalLiabilities: entity.totalLiabilities ?? null,
                totalRevenue: entity.totalRevenue ?? null,
                netProfitLossAfterTax: entity.netProfitLossAfterTax ?? null,
                audit: {
                    createdAt: entity.createdAt,
                    updatedAt: entity.updatedAt,
                    createdBy: entity.createdByUser?.username ?? null,
                    updatedBy: entity.updatedByUser?.username ?? null,
                },
            };
        }
}
