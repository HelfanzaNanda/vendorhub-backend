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
    @IsNotEmpty()
    fileName: string;

    @IsString()
    @IsNotEmpty()
    originalFileName: string;

    @IsString()
    @IsNotEmpty()
    extension: string;

    @IsString()
    @IsNotEmpty()
    mimeType: string;

    @IsNumber()
    @IsNotEmpty()
    fileSize: number;

    @IsString()
    @IsNotEmpty()
    storagePath: string;

    @IsString()
    @IsNotEmpty()
    storageDisk: string;

    @IsOptional()
    @IsString()
    version?: string;
}
