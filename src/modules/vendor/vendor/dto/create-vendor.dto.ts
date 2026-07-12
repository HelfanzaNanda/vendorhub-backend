import { VendorStageEnum, VendorStatusEnum, VendorTypeEnum } from '@common/enums/vendor.enum';
import { IsOptional, IsString, IsEnum, IsInt } from 'class-validator';

export class CreateVendorDto {
    @IsString()
    @IsOptional()
    vendorCode?: string;

    @IsEnum(VendorStageEnum)
    @IsOptional()
    vendorStage?: VendorStageEnum;

    @IsEnum(VendorTypeEnum)
    @IsOptional()
    vendorType?: VendorTypeEnum;

    @IsEnum(VendorStatusEnum)
    @IsOptional()
    status?: VendorStatusEnum;
}
