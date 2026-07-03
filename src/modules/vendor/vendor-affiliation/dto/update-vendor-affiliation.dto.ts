import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorAffiliationDto } from "./create-vendor-affiliation.dto";

export class UpdateVendorAffiliationDto extends PartialType(CreateVendorAffiliationDto) {}
