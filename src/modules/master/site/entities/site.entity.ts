import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Area } from '@modules/master/area/entities/area.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('sites')
export class Site extends AuditBaseEntity {
    @ManyToOne(() => Area, {
        createForeignKeyConstraints: false,
    })
    @JoinColumn({ name: 'area_id' })
    area: Area;

    @Column()
    areaId: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column()
    city: string;

    @Column({ nullable: true, length: 4000 })
    address: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;
}
