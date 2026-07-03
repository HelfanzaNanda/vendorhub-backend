import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorFinancialReportTempDto } from "./create-vendor-financial-report-temp.dto";

export class UpdateVendorFinancialReportTempDto extends PartialType(CreateVendorFinancialReportTempDto) {}
