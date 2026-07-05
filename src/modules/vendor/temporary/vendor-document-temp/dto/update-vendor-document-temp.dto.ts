import { PartialType } from '@nestjs/mapped-types';
import { CreateVendorDocumentTempDto } from './create-vendor-document-temp.dto';

export class UpdateVendorDocumentTempDto extends PartialType(
    CreateVendorDocumentTempDto,
) {}
