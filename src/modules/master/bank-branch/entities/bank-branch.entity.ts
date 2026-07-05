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

@Entity('bank_branches')
export class BankBranch extends AuditBaseEntity {
    @ManyToOne(() => Bank, {
        createForeignKeyConstraints: false,
    })
    @JoinColumn({ name: 'bank_id' })
    bank: Bank;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column({ nullable: true, length: 4000 })
    address: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;
}
