import { IsOptional, IsInt, IsString } from 'class-validator';

export class CreateVendorCompanyTempDto {
    @IsInt()
    @IsOptional()
    vendorTempId?: number;

    @IsInt()
    @IsOptional()
    vendorCompanyId?: number;

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
    companyName?: string;

    @IsInt()
    @IsOptional()
    siteId?: number;

    @IsInt()
    @IsOptional()
    businessTypeId?: number;

    @IsInt()
    @IsOptional()
    staffCount?: number;

    @IsString()
    @IsOptional()
    address?: string;

    @IsInt()
    @IsOptional()
    countryId?: number;

    @IsInt()
    @IsOptional()
    provinceId?: number;

    @IsInt()
    @IsOptional()
    cityId?: number;

    @IsString()
    @IsOptional()
    mapUrl?: string;

    @IsString()
    @IsOptional()
    postalCode?: string;

    @IsString()
    @IsOptional()
    website?: string;
}
