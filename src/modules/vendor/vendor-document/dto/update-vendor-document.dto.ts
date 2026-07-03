import { PartialType } from "@nestjs/mapped-types";
import { CreateVendorDocumentDto } from "./create-vendor-document.dto";

export class UpdateVendorDocumentDto extends PartialType(CreateVendorDocumentDto) {}
