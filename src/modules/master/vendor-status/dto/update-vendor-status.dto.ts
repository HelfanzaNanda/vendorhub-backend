import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorStatusDto } from "./create-vendor-status.dto";

export class UpdateVendorStatusDto extends PartialType(CreateVendorStatusDto) {}