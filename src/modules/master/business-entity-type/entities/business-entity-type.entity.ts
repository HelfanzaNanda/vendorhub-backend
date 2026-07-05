import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Bank } from '@modules/master/bank/entities/bank.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('business_entity_types')
export class BusinessEntityType extends AuditBaseEntity {
    @Column()
    code: string;

    @Column()
    name: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;
}
