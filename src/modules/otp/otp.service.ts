import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OtpRequest } from "./entities/otp.entity";
import { Repository } from "typeorm";
import { DateUtil } from "@common/utils/date.util";
import { OtpChannel, OtpPurpose, OtpStatus } from "@common/enums";
import { SendOtpDto } from "./dto/send-otp.dto";
import { VerifyOtpDto } from "./dto/verify-otp.dto";
import { NotificationService } from "@modules/notification/notification.service";
import { NotificationChannel, NotificationCode } from "@common/enums/notification.enum";

@Injectable()
export class OtpService {
    constructor(
        @InjectRepository(OtpRequest)
        private readonly repository: Repository<OtpRequest>,
        private readonly notificationService: NotificationService,
    ) {}

    async sendOtp(dto: SendOtpDto) {
        if (!dto.channel) {
            dto.channel = OtpChannel.EMAIL;
        }

        if (!dto.purpose) {
            dto.purpose = OtpPurpose.VENDOR_USER_ACCESS;
        }

        await this.invalidatePrevious(dto);

        const otpCode = this.generateOtp();
        const expiredAt = DateUtil.addMinutes(new Date(), 5);

        const entity = this.repository.create({
            purpose: dto.purpose,
            channel: dto.channel,
            destination: dto.destination,
            otpCode,
            expiredAt: expiredAt,
            attemptCount: 0,
            maxAttempt: 5,
            status: OtpStatus.PENDING,
        });

        await this.repository.save(entity);

        if (dto.channel === OtpChannel.EMAIL) {
            await this.notificationService.send({
                channels: [NotificationChannel.EMAIL],
                code: NotificationCode.USER_ACCESS_OTP,
                recipients: [dto.destination],
                data: {
                    otpCode: otpCode,
                    expiredTime: expiredAt.toUTCString(),
                },
            });
        }

        return {
            message: 'OTP sent successfully.',
            expiredAt: entity.expiredAt,
            otpCode
        };
    }

    async verifyOtp(dto: VerifyOtpDto) {
        if (!dto.channel) {
            dto.channel = OtpChannel.EMAIL;
        }

        if (!dto.purpose) {
            dto.purpose = OtpPurpose.VENDOR_USER_ACCESS;
        }

        const otp = await this.repository.findOne({
            where: {
                purpose: dto.purpose,
                destination: dto.destination,
                status: OtpStatus.PENDING,
            },
            order: {
                createdAt: 'DESC',
            },
        });

        if (!otp) {
            throw new BadRequestException('OTP not found.');
        }

        if (otp.expiredAt < new Date()) {
            otp.status = OtpStatus.EXPIRED;
            await this.repository.save(otp);

            throw new BadRequestException('OTP has expired.');
        }

        otp.attemptCount++;

        if (otp.attemptCount > otp.maxAttempt) {
            otp.status = OtpStatus.EXPIRED;
            await this.repository.save(otp);

            throw new BadRequestException('Maximum OTP attempts exceeded.');
        }

        if (otp.otpCode !== dto.otpCode) {
            await this.repository.save(otp);
            throw new BadRequestException('Invalid OTP.');
        }

        otp.status = OtpStatus.VERIFIED;
        otp.verifiedAt = new Date();

        await this.repository.save(otp);

        return {
            message: 'OTP verified successfully.',
        };
    }

    async consumeOtp(purpose: OtpPurpose, destination: string) {
        const otp = await this.repository.findOne({
            where: {
                purpose,
                destination,
                status: OtpStatus.VERIFIED,
            },
            order: {
                createdAt: 'DESC',
            },
        });

        if (!otp) {
            throw new BadRequestException('OTP verification not found.');
        }

        if (otp.usedAt) {
            throw new BadRequestException('OTP already used.');
        }

        otp.usedAt = new Date();
        otp.status = OtpStatus.USED;

        await this.repository.save(otp);
    }

    private async invalidatePrevious(dto: SendOtpDto) {
        await this.repository
            .createQueryBuilder()
            .update(OtpRequest)
            .set({
                status: OtpStatus.EXPIRED,
            })
            .where('purpose = :purpose', {
                purpose: dto.purpose,
            })
            .andWhere('destination = :destination', {
                destination: dto.destination,
            })
            .andWhere('status = :status', {
                status: OtpStatus.PENDING,
            })
            .execute();
    }

    private generateOtp(): string {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
}