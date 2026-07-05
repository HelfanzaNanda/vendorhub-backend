import { PartialType } from '@nestjs/mapped-types';
import { CreateVendorPersonnelTempDto } from './create-vendor-personnel-temp.dto';
import { DataSource } from '@common/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateVendorPersonnelTempDto extends PartialType(
    CreateVendorPersonnelTempDto,
) {
    @ApiProperty({ enum: DataSource })
    @IsNotEmpty()
    @IsEnum(DataSource)
    source: DataSource;
}
