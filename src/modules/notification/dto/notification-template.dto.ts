import { NotificationChannel } from "@common/enums/notification.enum";

export class NotificationTemplateDto {

    code: string;

    channel: NotificationChannel;

    subject?: string;

    title?: string;

    content: string;
}