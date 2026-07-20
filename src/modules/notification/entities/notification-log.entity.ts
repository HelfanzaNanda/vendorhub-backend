import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { NotificationTemplate } from './notification-template.entity';
import { NotificationChannel, NotificationStatus } from '@common/enums/notification.enum';
import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import { Notification } from './notification.entity';

@Entity('notification_logs')
export class NotificationLog extends AuditBaseEntity {

    @Column({
        name: 'notification_id',
    })
    notificationId: number;

    @ManyToOne(() => Notification)
    @JoinColumn({
        name: 'notification_id',
    })
    notification: Notification;

    @Column({
        name: 'notification_template_id',
    })
    notificationTemplateId: number;

    @ManyToOne(() => NotificationTemplate)
    @JoinColumn({
        name: 'notification_template_id',
    })
    notificationTemplate: NotificationTemplate;

    @Column({
        type: 'enum',
        enum: NotificationChannel,
    })
    channel: NotificationChannel;

    @Column({
        length: 255,
    })
    recipient: string;

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
        type: 'enum',
        enum: NotificationStatus,
    })
    status: NotificationStatus;

    @Column({
        nullable: true,
        type: 'text',
        name: 'error_message',
    })
    errorMessage?: string;

    @Column({
        nullable: true,
        name: 'sent_at',
    })
    sentAt?: Date;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;
}