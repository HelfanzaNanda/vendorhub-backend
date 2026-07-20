import { NotificationTemplateDto } from '../dto/notification-template.dto';

export interface NotificationProvider {
    send(
        recipient: string,
        template: NotificationTemplateDto,
    ): Promise<void>;
}