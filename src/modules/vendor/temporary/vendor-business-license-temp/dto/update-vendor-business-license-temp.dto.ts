import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorBusinessLicenseTempDto } from "./create-vendor-business-license-temp.dto";

export class UpdateVendorBusinessLicenseTempDto extends PartialType(CreateVendorBusinessLicenseTempDto) {}
