import { PartialType } from '@nestjs/mapped-types';
import { CreateVendorBankDto } from './create-vendor-bank.dto';

export class UpdateVendorBankDto extends PartialType(CreateVendorBankDto) {}
