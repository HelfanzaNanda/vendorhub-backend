import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OtpService } from './otp.service';
import { SendOtpDto } from './dto/send-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';

@ApiTags('OTP')
@Controller('otp')
export class OtpController {

    constructor(
        private readonly otpService: OtpService,
    ) {}

    @Post('send')
    @HttpCode(HttpStatus.OK)
    async send( @Body() dto: SendOtpDto) {
        return this.otpService.sendOtp(dto);
    }

    @Post('verify')
    @HttpCode(HttpStatus.OK)
    async verify(
        @Body() dto: VerifyOtpDto,
    ) {
        return this.otpService.verifyOtp(dto);
    }
}