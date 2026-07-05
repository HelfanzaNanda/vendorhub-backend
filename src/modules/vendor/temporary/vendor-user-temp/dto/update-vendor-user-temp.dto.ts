import { PartialType } from '@nestjs/mapped-types';
import { CreateVendorUserTempDto } from './create-vendor-user-temp.dto';
import { DataSource } from '@common/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateVendorUserTempDto extends PartialType(
    CreateVendorUserTempDto,
) {
    @ApiProperty({ enum: DataSource })
    @IsNotEmpty()
    @IsEnum(DataSource)
    source: DataSource;
}
