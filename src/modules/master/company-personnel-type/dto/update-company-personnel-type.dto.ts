import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyPersonnelTypeDto } from './create-company-personnel-type.dto';

export class UpdateCompanyPersonnelTypeDto extends PartialType(
    CreateCompanyPersonnelTypeDto,
) {}
