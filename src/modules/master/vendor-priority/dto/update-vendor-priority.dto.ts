import { PartialType } from '@nestjs/mapped-types';
import { CreateVendorPriorityDto } from './create-vendor-priority.dto';

export class UpdateVendorPriorityDto extends PartialType(
    CreateVendorPriorityDto,
) {}
