import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorAffiliationTempDto } from "./create-vendor-affiliation-temp.dto";

export class UpdateVendorAffiliationTempDto extends PartialType(CreateVendorAffiliationTempDto) {}
