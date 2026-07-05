import { PartialType } from '@nestjs/mapped-types';
import { CreateCompetencyCategoryDto } from './create-competency-category.dto';

export class UpdateCompetencyCategoryDto extends PartialType(
    CreateCompetencyCategoryDto,
) {}
