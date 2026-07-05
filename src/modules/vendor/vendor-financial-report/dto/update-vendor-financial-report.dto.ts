import { PartialType } from '@nestjs/mapped-types';
import { CreateVendorFinancialReportDto } from './create-vendor-financial-report.dto';

export class UpdateVendorFinancialReportDto extends PartialType(
    CreateVendorFinancialReportDto,
) {}
