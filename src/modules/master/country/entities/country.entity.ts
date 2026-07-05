import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('countries')
export class Country extends AuditBaseEntity {
    @Column()
    name: string;

    @Column({
        name: 'iso_2_code',
        nullable: true,
    })
    iso2Code: string;

    @Column({
        name: 'iso_3_code',
        nullable: true,
    })
    iso3Code: string;

    @Column({
        name: 'phone_code',
        nullable: true,
    })
    phoneCode: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;
}
