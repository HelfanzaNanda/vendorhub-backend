import { IsOptional, IsInt, IsString, IsNumber } from "class-validator";

export class CreateVendorPersonnelTempDto {
    @IsInt()
    @IsOptional()
    vendorTempId?: number;

    @IsInt()
    @IsOptional()
    vendorPicId?: number;

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
    personnelTypeId?: number;

    @IsInt()
    @IsOptional()
    titleId?: number;

    @IsString()
    @IsOptional()
    name?: string;

    @IsInt()
    @IsOptional()
    jobTypeId?: number;

    @IsString()
    @IsOptional()
    position?: string;

    @IsInt()
    @IsOptional()
    identityTypeId?: number;

    @IsString()
    @IsOptional()
    identityNumber?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsNumber()
    @IsOptional()
    ownershipPercentage?: number;

    @IsString()
    @IsOptional()
    privyId?: string;

    @IsString()
    @IsOptional()
    enterpriseId?: string;
}
