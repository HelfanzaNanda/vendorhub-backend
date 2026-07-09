import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('working_calendars')
export class MasterWorkingCalendar extends AuditBaseEntity {
    @Column({ name: 'day_of_week', type: 'int' })
    dayOfWeek: number; // 0 for Sunday, 1 for Monday, etc.

    @Column({ name: 'start_time', type: 'time' })
    startTime: string;

    @Column({ name: 'end_time', type: 'time' })
    endTime: string;

    @Column({ name: 'is_working_day', type: 'boolean', default: true })
    isWorkingDay: boolean;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
