import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Notification } from '../entities/notification.entity';

@Injectable()
export class NotificationRepository {

    constructor(
        private readonly dataSource: DataSource,
    ) {}

    async findByCode(code: string): Promise<Notification | null> {
        return this.dataSource
            .getRepository(Notification)
            .createQueryBuilder('n')
            .where('n.code = :code', { code })
            .andWhere('n.isActive = true')
            .getOne();
    }

}