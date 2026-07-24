import { IsOptional, IsInt, IsString, IsArray, ValidateNested, IsNumber, IsEnum, IsNotEmpty, ValidateIf } from 'class-validator';
import { DataSource, VendorTempAction } from '@common/enums';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVendorCustomerReferenceTempDto {
    @IsOptional()
    @IsInt()
    id?: number;

    @ValidateIf(o => [VendorTempAction.CREATE, VendorTempAction.UPDATE].includes(o.action))
    @IsString()
    @IsNotEmpty()
    name: string;

    @ValidateIf(o => [VendorTempAction.CREATE, VendorTempAction.UPDATE].includes(o.action))
    @IsString()
    @IsNotEmpty()
    description?: string;

    @ValidateIf(o => [VendorTempAction.CREATE, VendorTempAction.UPDATE].includes(o.action))
    @IsNumber()
    @IsNotEmpty()
    projectValue: number;

    @ValidateIf(o => [VendorTempAction.CREATE, VendorTempAction.UPDATE].includes(o.action))
    @IsInt()
    @IsNotEmpty()
    year: number;

    @ValidateIf(o => [VendorTempAction.CREATE, VendorTempAction.UPDATE].includes(o.action))
    @IsInt()
    @IsNotEmpty()
    fileId: number;

    @ValidateIf(o => [VendorTempAction.CREATE, VendorTempAction.UPDATE].includes(o.action))
    @IsArray()
    @IsInt({ each: true })
    @IsNotEmpty()
    areaIds: number[];

    @IsString()
    @IsOptional()
    @IsEnum(VendorTempAction)
    action: VendorTempAction;
}


export class DeleteVendorCustomerReferenceTempDto {
    @ApiProperty({ enum: DataSource })
    @IsNotEmpty()
    @IsEnum(DataSource)
    source: DataSource;
}
