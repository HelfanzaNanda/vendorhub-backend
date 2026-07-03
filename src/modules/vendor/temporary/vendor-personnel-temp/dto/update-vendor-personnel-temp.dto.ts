import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorPersonnelTempDto } from "./create-vendor-personnel-temp.dto";

export class UpdateVendorPersonnelTempDto extends PartialType(CreateVendorPersonnelTempDto) {}
