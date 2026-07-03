import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorBusinessLicenseDto } from "./create-vendor-business-license.dto";

export class UpdateVendorBusinessLicenseDto extends PartialType(CreateVendorBusinessLicenseDto) {}
