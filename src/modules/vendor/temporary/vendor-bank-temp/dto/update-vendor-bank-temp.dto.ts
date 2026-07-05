import { PartialType } from '@nestjs/mapped-types';
import { CreateVendorBankTempDto } from './create-vendor-bank-temp.dto';
import { DataSource } from '@common/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateVendorBankTempDto extends PartialType(
    CreateVendorBankTempDto,
) {
    @ApiProperty({ enum: DataSource })
    @IsNotEmpty()
    @IsEnum(DataSource)
    source: DataSource;
}
