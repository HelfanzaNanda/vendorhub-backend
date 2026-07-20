import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { NotificationTemplate } from './notification-template.entity';
import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { User } from '@modules/uman/user/entities/user.entity';

@Entity('notifications')
export class Notification extends AuditBaseEntity {

    @Index({ unique: true })
    @Column({
        length: 100,
    })
    code: string;

    @Column({
        length: 200,
    })
    name: string;

    @Column({
        nullable: true,
        type: 'text',
    })
    description?: string;

    @Column({
        name: 'is_active',
        default: true,
    })
    isActive: boolean;

    @OneToMany(
        () => NotificationTemplate,
        x => x.notification,
    )
    templates: NotificationTemplate[];

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;
}