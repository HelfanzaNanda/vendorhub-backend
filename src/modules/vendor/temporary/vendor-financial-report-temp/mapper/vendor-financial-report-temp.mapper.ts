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
            reportType: entity.reportType ?? null,
            year: entity.year ?? null,
            periodFrom: entity.periodFrom ?? null,
            periodTo: entity.periodTo ?? null,
            auditStatus: entity.auditStatus ?? null,
            fileId: entity.fileId ?? null,
            file: entity.file ? {
                id: entity.file.id,
                originalName: entity.file.originalFileName,
                filename: entity.file.fileName,
                mimeType: entity.file.mimeType,
                size: entity.file.fileSize,
                url: `/files/download/${entity.file.id}`,
            } : null,
            currencyId: entity.currencyId ?? null,
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

    static toResponses(
        entities: VendorFinancialReportTemp[],
    ): VendorFinancialReportTempResponseDto[] {
        return entities.map(this.toResponse);
    }
}
