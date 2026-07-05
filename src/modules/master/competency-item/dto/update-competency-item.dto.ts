import { PartialType } from '@nestjs/mapped-types';
import { CreateCompetencyItemDto } from './create-competency-item.dto';

export class UpdateCompetencyItemDto extends PartialType(
    CreateCompetencyItemDto,
) {}
