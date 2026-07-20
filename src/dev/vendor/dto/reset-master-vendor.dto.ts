import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ResetMasterVendorDto {
    @ApiProperty()
    @IsNotEmpty()
    vendorId: number;
}
