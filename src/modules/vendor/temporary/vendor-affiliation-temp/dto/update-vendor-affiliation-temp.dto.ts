import { PartialType } from '@nestjs/mapped-types';
import { CreateVendorAffiliationTempDto } from './create-vendor-affiliation-temp.dto';
import { DataSource } from '@common/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateVendorAffiliationTempDto extends PartialType(
    CreateVendorAffiliationTempDto,
) {
    @ApiProperty({ enum: DataSource })
    @IsNotEmpty()
    @IsEnum(DataSource)
    source: DataSource;
}
