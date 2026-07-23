import { Type } from "class-transformer";
import { IsBoolean, IsDateString, IsInt, IsOptional, IsString, ValidateNested } from "class-validator";

export class VendorDocumentItemDto {
    @IsOptional()
    @IsString()
    documentNumber?: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsBoolean()
    taxpayerStatus?: boolean;

    @IsOptional()
    @IsDateString()
    publishedDate?: string;

    @IsOptional()
    @IsDateString()
    expiredDate?: string;

    @IsOptional()
    @IsInt()
    fileId?: number;
}

export class SaveVendorDocumentTempDto {

    @IsOptional()
    @ValidateNested()
    @Type(() => VendorDocumentItemDto)
    npwp?: VendorDocumentItemDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => VendorDocumentItemDto)
    taxpayer?: VendorDocumentItemDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => VendorDocumentItemDto)
    deedOfEstablishment?: VendorDocumentItemDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => VendorDocumentItemDto)
    deedOfAmendment?: VendorDocumentItemDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => VendorDocumentItemDto)
    organizationStructure?: VendorDocumentItemDto;
}