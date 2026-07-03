import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorBusinessLicenseItemDto } from "./create-vendor-business-license-item.dto";

export class UpdateVendorBusinessLicenseItemDto extends PartialType(CreateVendorBusinessLicenseItemDto) {}
