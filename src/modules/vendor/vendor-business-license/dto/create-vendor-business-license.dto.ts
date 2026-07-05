import { IsOptional, IsInt, IsString } from 'class-validator';

export class CreateVendorBusinessLicenseDto {
    @IsInt()
    @IsOptional()
    vendorId?: number;

    @IsInt()
    @IsOptional()
    fileId?: number;

    @IsString()
    @IsOptional()
    number?: string;
}
