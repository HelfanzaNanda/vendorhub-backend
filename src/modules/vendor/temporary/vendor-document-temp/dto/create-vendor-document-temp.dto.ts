import { IsOptional, IsInt, IsString } from 'class-validator';

export class CreateVendorDocumentTempDto {
    @IsInt()
    @IsOptional()
    vendorTempId?: number;

    @IsInt()
    @IsOptional()
    vendorDocumentId?: number;

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
    documentTypeId?: number;

    @IsString()
    @IsOptional()
    documentNumber?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    taxpayerStatus?: string;

    @IsOptional()
    publishDate?: Date;

    @IsOptional()
    expiredDate?: Date;

    @IsInt()
    @IsOptional()
    fileId?: number;
}
