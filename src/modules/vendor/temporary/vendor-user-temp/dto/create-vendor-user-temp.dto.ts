import { IsOptional, IsInt, IsString, IsArray } from 'class-validator';

export class CreateVendorUserTempDto {
    @IsInt()
    @IsOptional()
    vendorTempId?: number;

    @IsInt()
    @IsOptional()
    vendorUserId?: number;

    @IsString()
    @IsOptional()
    action?: string;

    @IsString()
    @IsOptional()
    reviewStatus?: string;

    @IsString()
    @IsOptional()
    reviewNotes?: string;

    @IsString()
    @IsOptional()
    firstname?: string;

    @IsString()
    @IsOptional()
    lastname?: string;

    @IsString()
    @IsOptional()
    username?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    jobTitle?: string;

    @IsInt()
    @IsOptional()
    positionId?: number;

    @IsOptional()
    effectiveStartDate?: Date;

    @IsOptional()
    effectiveEndDate?: Date;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsArray()
    @IsInt({ each: true })
    @IsOptional()
    areaIds?: Array<number>;

    @IsArray()
    @IsInt({ each: true })
    @IsOptional()
    roleIds?: Array<number>;

    @IsInt()
    @IsOptional()
    fileId?: number;
}
