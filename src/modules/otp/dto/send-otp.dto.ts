import { OtpChannel, OtpPurpose } from '@common/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export class SendOtpDto {


    @ApiProperty({
        enum: OtpPurpose,
    })
    @IsOptional()
    @IsEnum(OtpPurpose)
    purpose?: OtpPurpose;

    @ApiProperty({
        enum: OtpChannel,
    })
    @IsOptional()
    @IsEnum(OtpChannel)
    channel?: OtpChannel;

    @ApiProperty()
    @IsNotEmpty()
    destination: string;
}