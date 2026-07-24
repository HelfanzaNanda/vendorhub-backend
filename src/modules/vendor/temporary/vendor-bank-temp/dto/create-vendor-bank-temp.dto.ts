import { IsOptional, IsInt, IsString } from 'class-validator';

export class CreateVendorBankTempDto {
    @IsInt()
    @IsOptional()
    vendorTempId?: number;

    @IsInt()
    @IsOptional()
    vendorBankId?: number;

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
    countryId?: number;

    @IsInt()
    @IsOptional()
    bankId?: number;

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
