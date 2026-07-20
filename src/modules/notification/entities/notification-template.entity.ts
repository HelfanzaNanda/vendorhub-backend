import { NotificationChannel } from '@common/enums/notification.enum';
import {
    BaseEntity,
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { Notification } from './notification.entity';
import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { User } from '@modules/uman/user/entities/user.entity';

@Entity('notification_templates')

export class NotificationTemplate extends AuditBaseEntity {

    @Column({
        name: 'notification_id',
    })
    notificationId: number;

    @ManyToOne(
        () => Notification,
        x => x.templates,
    )
    @JoinColumn({
        name: 'notification_id',
    })
    notification: Notification;

    @Column({
        type: 'enum',
        enum: NotificationChannel,
    })
    channel: NotificationChannel;

    @Column({
        nullable: true,
        length: 255,
    })
    subject?: string;

    @Column({
        nullable: true,
        length: 255,
    })
    title?: string;

    @Column({
        type: 'longtext',
    })
    content: string;

    @Column({
        name: 'is_active',
        default: true,
    })
    isActive: boolean;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;
}