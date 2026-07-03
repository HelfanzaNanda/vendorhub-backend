import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorBankTempDto } from "./create-vendor-bank-temp.dto";

export class UpdateVendorBankTempDto extends PartialType(CreateVendorBankTempDto) {}
