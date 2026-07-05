import { IsOptional, IsInt, IsString } from 'class-validator';

export class CreateVendorDocumentDto {
    @IsInt()
    @IsOptional()
    vendorId?: number;

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
