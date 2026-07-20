import { Injectable, NotFoundException } from "@nestjs/common";
import { SendNotificationDto } from "./dto/send-notification.dto";
import { TemplateParser } from "./parsers/template-parser";
import { NotificationProviderFactory } from "./providers/notification-provider.factory";
import { NotificationLogRepository } from "./repositories/notification-log.repository";
import { NotificationTemplateRepository } from "./repositories/notification-template.repository";
import { NotificationRepository } from "./repositories/notification.repository";
import { NotificationChannel, NotificationStatus } from "@common/enums/notification.enum";
import { NotificationTemplateDto } from "./dto/notification-template.dto";
import { NotificationProvider } from "./providers/notification-provider.interface";

@Injectable()
export class NotificationService {

    constructor(
        private readonly notificationRepository: NotificationRepository,
        private readonly templateRepository: NotificationTemplateRepository,
        private readonly logRepository: NotificationLogRepository,
        private readonly parser: TemplateParser,
        private readonly providerFactory: NotificationProviderFactory,
    ) {}

    async send(dto: SendNotificationDto): Promise<void> {
        const notification = await this.notificationRepository.findByCode(dto.code);

        if (!notification) {
            throw new NotFoundException(
                `Notification '${dto.code}' not found.`,
            );
        }

        for (const channel of dto.channels) {
            await this.processChannel(
                notification.id,
                channel,
                dto,
            );
        }

    }

    private async processChannel( notificationId: number, channel: NotificationChannel, dto: SendNotificationDto, ) {

        const template = await this.templateRepository.findTemplate(notificationId, channel);
        // const parsedTemplate: NotificationTemplateDto = {
        //     code: template.notification.code,
        //     channel,
        //     subject: this.parser.parse( template.subject ?? '', dto.data, ),
        //     title: this.parser.parse(template.title ?? '', dto.data),
        //     content: this.parser.parse(template.content, dto.data),
        // };

        const parsedTemplate = this.parser.parseObject<NotificationTemplateDto>(
            {
                code: template.notification.code,
                channel,
                subject: template.subject ?? '',
                title: template.title ?? '',
                content: template.content,
            },
            dto.data,
        );

        console.log('CEK : ', {
            data : dto.data,
            parsedTemplate,
        });
        

        const provider = this.providerFactory.get(channel);
        for (const recipient of dto.recipients) {
            await this.processRecipient(
                notificationId,
                template.id,
                recipient,
                parsedTemplate,
                provider,
            );

        }

    }

    private async processRecipient(notificationId: number, templateId: number, recipient: string, template: NotificationTemplateDto, provider: NotificationProvider) {

        const log = await this.logRepository.create({
                notificationId,
                notificationTemplateId: templateId,
                channel: template.channel,
                recipient,
                subject: template.subject,
                title: template.title,
                content: template.content,
                status: NotificationStatus.PENDING,
            });

        try {

            await provider.send(recipient, template);
            await this.logRepository.markSent(log.id);

        } catch (err: any) {
            await this.logRepository.markFailed(log.id, err.message);

        }

    }

}