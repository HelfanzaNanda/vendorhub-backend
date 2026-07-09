import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('holidays')
export class MasterHoliday extends AuditBaseEntity {
    @Column({ name: 'holiday_date', type: 'date' })
    holidayDate: Date;

    @Column({ name: 'holiday_name' })
    holidayName: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
