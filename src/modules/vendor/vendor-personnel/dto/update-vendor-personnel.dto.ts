import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorPersonnelDto } from "./create-vendor-personnel.dto";

export class UpdateVendorPersonnelDto extends PartialType(CreateVendorPersonnelDto) {}
