import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorTempDto } from "./create-vendor-temp.dto";

export class UpdateVendorTempDto extends PartialType(CreateVendorTempDto) {}
