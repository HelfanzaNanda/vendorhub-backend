import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Bank } from '@modules/master/bank/entities/bank.entity';
import { CompetencyCategory } from '@modules/master/competency-category/entities/competency-category.entity';
import { Country } from '@modules/master/country/entities/country.entity';
import { Province } from '@modules/master/province/entities/province.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('currencies')
export class Currency extends AuditBaseEntity {
    @ManyToOne(() => Country, {
        createForeignKeyConstraints: false,
    })
    @JoinColumn({ name: 'country_id' })
    country: Country;

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
