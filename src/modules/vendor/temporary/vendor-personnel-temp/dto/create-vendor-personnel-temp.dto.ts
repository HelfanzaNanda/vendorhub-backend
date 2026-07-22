import { Type } from 'class-transformer';
import {
    IsOptional,
    IsInt,
    IsString,
    IsNumber,
    IsNotEmpty,
    IsBoolean,
    IsDate,
    IsArray,
    ValidateNested,
} from 'class-validator';
import { CreateVendorPersonnelDocumentTempDto } from './create-vendor-personnel-document-temp.dto';

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

    @IsString()
    @IsNotEmpty()
    personnelTypeCode?: string;

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

    @IsBoolean()
    @IsOptional()
    hasAuthorityLimitation?: boolean;

    @IsString()
    @IsOptional()
    authorityLimitationNotes?: string;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    authorityLimitationExpiredAt?: Date;

    @IsInt()
    @IsOptional()
    authorityLimitationFileId?: number;

    @IsString()
    @IsOptional()
    npwp?: string;

    @IsArray()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreateVendorPersonnelDocumentTempDto)
    documents?: CreateVendorPersonnelDocumentTempDto[];
}
