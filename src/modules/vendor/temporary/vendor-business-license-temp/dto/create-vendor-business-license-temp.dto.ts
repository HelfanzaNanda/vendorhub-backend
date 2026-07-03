import { IsOptional, IsInt, IsString } from "class-validator";

export class CreateVendorBusinessLicenseTempDto {
    @IsInt()
    @IsOptional()
    vendorTempId?: number;

    @IsInt()
    @IsOptional()
    vendorBusinessLicenseId?: number;

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
    fileId?: number;

    @IsString()
    @IsOptional()
    number?: string;

    @IsString()
    @IsOptional()
    industryClassificationIds?: string;
}
