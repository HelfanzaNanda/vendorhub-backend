import { VendorFinancialReportResponseDto } from "../dto/response-vendor-financial-report.dto";
import { VendorFinancialReport } from "../entities/vendor-financial-report.entity";

export class VendorFinancialReportMapper {
    static toResponse(entity: VendorFinancialReport): VendorFinancialReportResponseDto {
        return {
            id: entity.id,
            vendorId: entity.vendorId ?? null,
            reportType: entity.reportType ?? null,
            year: entity.year ?? null,
            periodFrom: entity.periodFrom ?? null,
            periodTo: entity.periodTo ?? null,
            auditStatus: entity.auditStatus ?? null,
            fileId: entity.fileId ?? null,
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

    static toResponses(entities: VendorFinancialReport[]): VendorFinancialReportResponseDto[] {
        return entities.map(this.toResponse);
    }
}
