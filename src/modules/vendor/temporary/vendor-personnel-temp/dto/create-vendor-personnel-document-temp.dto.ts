import { IsOptional, IsInt, IsString, IsArray, ValidateNested, IsNumber, IsDate, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { EntityIdDto } from '@modules/vendor/vendor-term-condition/dto/create-vendor-term-condition.dto';
import { PersonnelDocumentEnum } from '@common/enums/personnel-type.enum';
import { VendorTempAction } from '@common/enums';

export class CreateVendorPersonnelDocumentTempDto {
    @IsOptional()
    @IsInt()
    id?: number;

    @IsString()
    @IsOptional()
    @IsEnum(PersonnelDocumentEnum)
    type?: PersonnelDocumentEnum;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    validFrom?: Date;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    validTo?: Date;

    @IsString()
    @IsOptional()
    @IsEnum(VendorTempAction)
    action: VendorTempAction;

}
