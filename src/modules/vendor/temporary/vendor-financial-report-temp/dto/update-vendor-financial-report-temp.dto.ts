import { PartialType } from '@nestjs/mapped-types';
import { CreateVendorFinancialReportTempDto } from './create-vendor-financial-report-temp.dto';
import { DataSource } from '@common/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateVendorFinancialReportTempDto extends PartialType(
    CreateVendorFinancialReportTempDto,
) {
    @ApiProperty({ enum: DataSource })
    @IsNotEmpty()
    @IsEnum(DataSource)
    source: DataSource;
}
