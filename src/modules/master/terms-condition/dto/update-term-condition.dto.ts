import { PartialType } from '@nestjs/mapped-types';
import { CreateTermsConditionDto } from './create-term-condition.dto';

export class UpdateTermsConditionDto extends PartialType(
    CreateTermsConditionDto,
) {}
