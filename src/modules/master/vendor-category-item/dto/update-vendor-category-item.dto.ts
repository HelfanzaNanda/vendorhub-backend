import { PartialType } from '@nestjs/mapped-types';
import { CreateVendorCategoryItemDto } from './create-vendor-category-item.dto';

export class UpdateVendorCategoryItemDto extends PartialType(
    CreateVendorCategoryItemDto,
) {}
