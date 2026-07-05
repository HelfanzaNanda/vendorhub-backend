import { PartialType } from '@nestjs/mapped-types';
import { CreateIdentityTypeDto } from './create-identity-type.dto';

export class UpdateIdentityTypeDto extends PartialType(CreateIdentityTypeDto) {}
