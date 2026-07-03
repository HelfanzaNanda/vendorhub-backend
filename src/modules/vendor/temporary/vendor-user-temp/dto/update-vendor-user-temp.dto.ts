import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorUserTempDto } from "./create-vendor-user-temp.dto";

export class UpdateVendorUserTempDto extends PartialType(CreateVendorUserTempDto) {}
