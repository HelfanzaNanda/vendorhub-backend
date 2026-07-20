import { NotificationChannel } from '@common/enums/notification.enum';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { NotificationTemplate } from '../entities/notification-template.entity';

@Injectable()
export class NotificationTemplateRepository {

    constructor(
        private readonly dataSource: DataSource,
    ) {}

    async findTemplate(
        notificationId: number,
        channel: NotificationChannel,
    ): Promise<NotificationTemplate> {

        const template = await this.dataSource
            .getRepository(NotificationTemplate)
            .createQueryBuilder('nt')
            .where('nt.notificationId = :notificationId', {
                notificationId,
            })
            .andWhere('nt.channel = :channel', {
                channel,
            })
            .andWhere('nt.isActive = true')
            .leftJoinAndSelect('nt.notification', 'notification')
            .getOne();

        if (!template) {
            throw new NotFoundException(
                `Notification template '${channel}' not found.`,
            );
        }

        return template;
    }

}