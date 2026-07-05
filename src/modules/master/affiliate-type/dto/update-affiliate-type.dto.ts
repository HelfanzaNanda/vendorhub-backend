import { PartialType } from '@nestjs/mapped-types';
import { CreateAffiliateTypeDto } from './create-affiliate-type.dto';

export class UpdateAffiliateTypeDto extends PartialType(
    CreateAffiliateTypeDto,
) {}
