import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorCompanyTempDto } from "./create-vendor-company-temp.dto";

export class UpdateVendorCompanyTempDto extends PartialType(CreateVendorCompanyTempDto) {}
