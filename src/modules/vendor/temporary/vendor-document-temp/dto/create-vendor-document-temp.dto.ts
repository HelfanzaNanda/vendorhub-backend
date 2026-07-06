import { IsOptional, IsInt, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class FileIdDto {
    @IsInt()
    id: number;
}

export class CreateVendorDocumentTempDto {
    @IsInt()
    documentTypeId: number;

    @IsString()
    @IsOptional()
    documentNumber?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsOptional()
    status?: boolean | string;

    @IsOptional()
    published_date?: Date;

    @IsOptional()
    @ValidateNested()
    @Type(() => FileIdDto)
    fileId?: FileIdDto;
}
