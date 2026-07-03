import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorCompanyDto } from "./create-vendor-company.dto";

export class UpdateVendorCompanyDto extends PartialType(CreateVendorCompanyDto) {}
