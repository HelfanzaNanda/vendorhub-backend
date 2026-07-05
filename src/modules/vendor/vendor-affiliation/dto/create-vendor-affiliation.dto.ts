import { IsOptional, IsInt, IsString } from 'class-validator';

export class CreateVendorAffiliationDto {
    @IsInt()
    @IsOptional()
    vendorId?: number;

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
