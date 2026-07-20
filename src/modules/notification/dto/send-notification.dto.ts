import { NotificationChannel, NotificationCode } from '@common/enums/notification.enum';
import { ApiProperty } from '@nestjs/swagger';
import {
    ArrayNotEmpty,
    IsArray,
    IsEnum,
    IsNotEmpty,
    IsObject,
    IsOptional,
    IsString,
} from 'class-validator';

export class SendNotificationDto {

    @ApiProperty({
        enum: NotificationCode,
    })
    @IsEnum(NotificationCode)
    code: NotificationCode;

    @ApiProperty({
        enum: NotificationChannel,
        isArray: true,
    })
    @IsArray()
    @ArrayNotEmpty()
    @IsEnum(NotificationChannel, { each: true })
    channels: NotificationChannel[];

    @ApiProperty({
        example: ['vendor@mail.com'],
    })
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    recipients: string[];

    @ApiProperty({
        required: false,
        example: 1,
    })
    @IsOptional()
    userId?: number;

    @ApiProperty({
        required: false,
        example: {
            otp: '123456',
            expiredIn: 5,
            vendorName: 'PT ABC',
        },
    })
    @IsOptional()
    @IsObject()
    data?: Record<string, any>;
}