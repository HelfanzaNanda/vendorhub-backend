import { NotificationChannel } from "@common/enums/notification.enum";
import { EmailProvider } from "./email.provider";
import { BadRequestException, Injectable } from "@nestjs/common";
import { NotificationProvider } from "./notification-provider.interface";
import { SmsProvider } from "./sms.provider";
import { PushProvider } from "./push.provider";
import { BellProvider } from "./bell.provider";
import { WhatsappProvider } from "./whatsapp.provider";
import { TelegramProvider } from "./telegram.provider";

@Injectable()
export class NotificationProviderFactory {

    constructor(
        private readonly emailProvider: EmailProvider,
        private readonly smsProvider: SmsProvider,
        private readonly pushProvider: PushProvider,
        private readonly bellProvider: BellProvider,
        private readonly whatsappProvider: WhatsappProvider,
        private readonly telegramProvider: TelegramProvider,
    ) {}

    get(channel: NotificationChannel): NotificationProvider {

        switch (channel) {

            case NotificationChannel.EMAIL:
                return this.emailProvider;

            case NotificationChannel.SMS:
                return this.smsProvider;

            case NotificationChannel.PUSH:
                return this.pushProvider;

            case NotificationChannel.BELL:
                return this.bellProvider;

            case NotificationChannel.WHATSAPP:
                return this.whatsappProvider;
            
            case NotificationChannel.TELEGRAM:
                return this.telegramProvider;

            default:
                throw new BadRequestException(
                    `Channel ${channel} not supported.`,
                );
        }
    }

}