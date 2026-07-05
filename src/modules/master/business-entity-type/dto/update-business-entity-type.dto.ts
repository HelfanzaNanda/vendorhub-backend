import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessEntityTypeDto } from './create-business-entity-type.dto';

export class UpdateBusinessEntityTypeDto extends PartialType(
    CreateBusinessEntityTypeDto,
) {}
