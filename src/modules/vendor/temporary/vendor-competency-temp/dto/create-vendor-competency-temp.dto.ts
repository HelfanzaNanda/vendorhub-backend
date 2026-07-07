import { IsOptional, IsInt, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateVendorCustomerReferenceTempDto } from './create-vendor-customer-reference-temp.dto';

export class CreateVendorCompetencyTempDto {
    @IsInt()
    @IsOptional()
    vendorTempId?: number;

    @IsInt()
    @IsOptional()
    vendorCompetencyId?: number;

    @IsString()
    @IsOptional()
    action?: string;

    @IsString()
    @IsOptional()
    reviewStatus?: string;

    @IsString()
    @IsOptional()
    reviewNotes?: string;

    @IsInt()
    @IsOptional()
    subCategoryItemId?: number;

    @IsArray()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreateVendorCustomerReferenceTempDto)
    customerReferences?: CreateVendorCustomerReferenceTempDto[];
}
