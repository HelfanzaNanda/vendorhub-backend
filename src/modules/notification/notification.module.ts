import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Notification } from "./entities/notification.entity";
import { NotificationTemplate } from "./entities/notification-template.entity";
import { NotificationLog } from "./entities/notification-log.entity";
import { NotificationController } from "./notification.controller";
import { NotificationService } from "./notification.service";
import { NotificationRepository } from "./repositories/notification.repository";
import { NotificationTemplateRepository } from "./repositories/notification-template.repository";
import { NotificationLogRepository } from "./repositories/notification-log.repository";
import { TemplateParser } from "./parsers/template-parser";
import { EmailProvider } from "./providers/email.provider";
import { SmsProvider } from "./providers/sms.provider";
import { PushProvider } from "./providers/push.provider";
import { WhatsappProvider } from "./providers/whatsapp.provider";
import { BellProvider } from "./providers/bell.provider";
import { NotificationProviderFactory } from "./providers/notification-provider.factory";
import { TelegramProvider } from "./providers/telegram.provider";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Notification,
            NotificationTemplate,
            NotificationLog,
        ]),
    ],
    controllers: [
        NotificationController,
    ],
    providers: [
        NotificationService,

        NotificationRepository,
        NotificationTemplateRepository,
        NotificationLogRepository,

        TemplateParser,

        EmailProvider,
        SmsProvider,
        PushProvider,
        BellProvider,
        WhatsappProvider,
        TelegramProvider,

        NotificationProviderFactory,
    ],
    exports: [
        NotificationService,
    ],
})
export class NotificationModule {}