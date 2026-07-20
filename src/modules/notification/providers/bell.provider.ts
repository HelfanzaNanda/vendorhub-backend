import { Injectable } from '@nestjs/common';
import { NotificationProvider } from './notification-provider.interface';
import { NotificationTemplateDto } from '../dto/notification-template.dto';

@Injectable()
export class BellProvider implements NotificationProvider {

    async send(
        recipient: string,
        template: NotificationTemplateDto,
    ): Promise<void> {

        /**
         * TODO
         * Save to notification_bells
         */

    }

}