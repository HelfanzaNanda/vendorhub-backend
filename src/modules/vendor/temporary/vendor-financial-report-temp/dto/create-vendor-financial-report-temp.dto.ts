import { IsOptional, IsInt, IsString, IsEnum, IsNumber } from "class-validator";

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

    @IsString()
    @IsOptional()
    reportType?: string;

    @IsInt()
    @IsOptional()
    year?: number;

    @IsOptional()
    periodFrom?: Date;

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
