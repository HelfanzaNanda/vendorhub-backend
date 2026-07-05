import { PartialType } from '@nestjs/mapped-types';
import { CreateTelcoPrefixDto } from './create-telco-prefix.dto';

export class UpdateTelcoPrefixDto extends PartialType(CreateTelcoPrefixDto) {}
