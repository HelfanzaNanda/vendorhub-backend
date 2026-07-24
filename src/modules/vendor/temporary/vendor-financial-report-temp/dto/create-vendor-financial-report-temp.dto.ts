import { IsOptional, IsInt, IsString, IsEnum, IsNumber, ValidateIf } from 'class-validator';

export class CreateVendorFinancialReportTempDto {
    @IsInt()
    @IsOptional()
    vendorTempId?: number;

    @IsInt()
    @IsOptional()
    vendorFinancialReportId?: number;

    @IsString()
    @IsOptional()
    action?: string;

    @IsString()
    @IsOptional()
    reviewStatus?: string;

    @IsString()
    @IsOptional()
    reviewNotes?: string;

    @IsEnum(['INTERIM','ANNUAL'])
    @IsOptional()
    reportType?: 'INTERIM'|'ANNUAL';

    @ValidateIf(o => o.reportType === 'ANNUAL')
    @IsInt()
    @IsOptional()
    year?: number;

    @ValidateIf(o => o.reportType === 'ANNUAL')
    @IsOptional()
    financialPeriodId?: number;

    @ValidateIf(o => o.reportType === 'INTERIM' || o.financialPeriodId == 3)
    @IsOptional()
    periodFrom?: Date;

    @ValidateIf(o => o.reportType === 'INTERIM' || o.financialPeriodId == 3)
    @IsOptional()
    periodTo?: Date;

    @IsEnum(['AUDITED', 'UNAUDITED'])
    @IsOptional()
    auditStatus?: 'AUDITED' | 'UNAUDITED';

    @IsInt()
    @IsOptional()
    fileId?: number;

    @IsInt()
    @IsOptional()
    currencyId?: number;

    @IsNumber()
    @IsOptional()
    currentAssets?: number;

    @IsNumber()
    @IsOptional()
    totalAssets?: number;

    @IsNumber()
    @IsOptional()
    currentLiabilities?: number;

    @IsNumber()
    @IsOptional()
    totalLiabilities?: number;

    @IsNumber()
    @IsOptional()
    totalRevenue?: number;

    @IsNumber()
    @IsOptional()
    netProfitLossAfterTax?: number;
}
