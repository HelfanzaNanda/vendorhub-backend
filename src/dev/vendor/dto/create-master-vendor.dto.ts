import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsObject } from 'class-validator';

export enum VendorScenario {
    SMALL_VENDOR = 'SMALL_VENDOR',
    MEDIUM_VENDOR = 'MEDIUM_VENDOR',
    LARGE_VENDOR = 'LARGE_VENDOR',
}

export class CreateMasterVendorDto {
    // @ApiProperty({ enum: VendorScenario })
    // @IsEnum(VendorScenario)
    // scenario: VendorScenario;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsObject()
    override?: any;
}
