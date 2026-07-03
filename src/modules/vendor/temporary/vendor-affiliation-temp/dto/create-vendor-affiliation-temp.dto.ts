import { IsOptional, IsInt, IsString } from "class-validator";

export class CreateVendorAffiliationTempDto {
    @IsInt()
    @IsOptional()
    vendorTempId?: number;

    @IsInt()
    @IsOptional()
    vendorAffiliationId?: number;

    @IsString()
    @IsOptional()
    action?: string;

    @IsString()
    @IsOptional()
    reviewStatus?: string;

    @IsString()
    @IsOptional()
    reviewNotes?: string;

    @IsInt()
    @IsOptional()
    affiliateTypeId?: number;

    @IsString()
    @IsOptional()
    companyName?: string;

    @IsString()
    @IsOptional()
    npwp?: string;

    @IsString()
    @IsOptional()
    businessField?: string;

    @IsInt()
    @IsOptional()
    companyBusinessEntityTypeId?: number;
}
