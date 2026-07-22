import { IsOptional, IsInt, IsString, IsArray, ValidateNested, IsNumber, IsDate, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { EntityIdDto } from '@modules/vendor/vendor-term-condition/dto/create-vendor-term-condition.dto';
import { PersonnelDocumentEnum } from '@common/enums/personnel-type.enum';

export class CreateVendorPersonnelDocumentTempDto {
    @IsOptional()
    @IsString()
    id?: string | number; // Frontend might send string uuid or numeric id

    @IsOptional()
    @IsInt()
    vendorPersonnelDocumentId?: number;

    @IsString()
    @IsOptional()
    @IsEnum(PersonnelDocumentEnum)
    documentType?: PersonnelDocumentEnum;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    validFrom?: Date;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    validTo?: Date;

}
