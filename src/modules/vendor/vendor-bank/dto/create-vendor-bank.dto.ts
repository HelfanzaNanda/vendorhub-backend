import { IsOptional, IsInt, IsString } from "class-validator";

export class CreateVendorBankDto {
    @IsInt()
    @IsOptional()
    vendorId?: number;

    @IsInt()
    @IsOptional()
    bankBranchId?: number;

    @IsInt()
    @IsOptional()
    currencyId?: number;

    @IsString()
    @IsOptional()
    accountName?: string;

    @IsString()
    @IsOptional()
    accountNumber?: string;

    @IsInt()
    @IsOptional()
    fileId?: number;
}
