import { OtpChannel, OtpPurpose } from '@common/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, Length } from 'class-validator';
export class VerifyOtpDto {

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

    @ApiProperty()
    @Length(6, 6)
    otpCode: string;
}