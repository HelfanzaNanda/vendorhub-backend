import { PartialType } from '@nestjs/mapped-types';
import { CreateVendorPersonnelTempDto } from './create-vendor-personnel-temp.dto';
import { DataSource } from '@common/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { PersonnelCode } from '@common/enums/personnel-type.enum';

export class UpdateVendorPersonnelTempDto extends PartialType(
    CreateVendorPersonnelTempDto,
) {
    @ApiProperty({ enum: DataSource })
    @IsNotEmpty()
    @IsEnum(DataSource)
    source: DataSource;
}


export class DeleteVendorPersonnelTempDto {

    @ApiProperty({ enum: PersonnelCode })
    @IsNotEmpty()
    @IsEnum(PersonnelCode)
    personnelTypeCode: PersonnelCode;

    @ApiProperty({ enum: DataSource })
    @IsNotEmpty()
    @IsEnum(DataSource)
    source: DataSource;
}
