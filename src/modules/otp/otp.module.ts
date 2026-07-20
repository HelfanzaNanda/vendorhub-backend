import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtpRequest } from './entities/otp.entity';
import { OtpController } from './otp.controller';
import { OtpService } from './otp.service';
import { NotificationModule } from '@modules/notification/notification.module';

@Module({
    imports: [TypeOrmModule.forFeature([OtpRequest]), NotificationModule],
    controllers: [OtpController],
    providers: [OtpService],
    exports: [OtpService],
})
export class OtpModule {}
