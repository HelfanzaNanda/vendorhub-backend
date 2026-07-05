import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateFileDto {
    @IsOptional()
    @IsNumber()
    ownerId?: number;

    @IsOptional()
    @IsNumber()
    referenceId?: number;

    @IsOptional()
    @IsNumber()
    documentTypeId?: number;

    @IsString()
    @IsOptional()
    fileName?: string;

    @IsString()
    @IsOptional()
    originalFileName?: string;

    @IsString()
    @IsOptional()
    extension?: string;

    @IsString()
    @IsOptional()
    mimeType?: string;

    @IsNumber()
    @IsOptional()
    fileSize?: number;

    @IsString()
    @IsOptional()
    storagePath?: string;

    @IsString()
    @IsOptional()
    storageDisk?: string;

    @IsOptional()
    @IsString()
    version?: string;
}
