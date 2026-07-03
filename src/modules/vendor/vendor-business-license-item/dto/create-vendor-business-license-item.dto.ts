import { IsOptional, IsInt } from "class-validator";

export class CreateVendorBusinessLicenseItemDto {
    @IsInt()
    @IsOptional()
    vendorBusinessLicenseId?: number;

    @IsInt()
    @IsOptional()
    industryClassificationId?: number;
}
