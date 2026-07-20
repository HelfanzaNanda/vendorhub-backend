import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { NotificationLog } from '../entities/notification-log.entity';
import { NotificationStatus } from '@common/enums/notification.enum';

@Injectable()
export class NotificationLogRepository {

    constructor(
        private readonly dataSource: DataSource,
    ) {}

    async create(
        data: Partial<NotificationLog>,
    ): Promise<NotificationLog> {
        return this.dataSource
            .getRepository(NotificationLog)
            .save(data);
    }

    async markSent( id: number ): Promise<void> {
        await this.dataSource
            .getRepository(NotificationLog)
            .update(id, {
                status: NotificationStatus.SENT,
                sentAt: new Date(),
            });
    }

    async markFailed( id: number, errorMessage: string, ): Promise<void> {

        await this.dataSource
            .getRepository(NotificationLog)
            .update(id, {
                status: NotificationStatus.FAILED,
                errorMessage
            });
    }

}