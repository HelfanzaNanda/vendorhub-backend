import { IsOptional, IsInt, IsString, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { EntityIdDto } from '@modules/vendor/vendor-term-condition/dto/create-vendor-term-condition.dto';

export class CreateVendorCustomerReferenceTempDto {
    @IsOptional()
    @IsString()
    id?: string | number; // Frontend might send string uuid or numeric id

    @IsOptional()
    @IsInt()
    vendorCustomerReferenceId?: number;

    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNumber()
    projectValue: number;

    @IsInt()
    year: number;

    @ValidateNested()
    @Type(() => EntityIdDto)
    fileId: EntityIdDto;

    @IsArray()
    @IsInt({ each: true })
    areaIds: number[];
}
