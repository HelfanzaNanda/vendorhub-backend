import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Bank } from '@modules/master/bank/entities/bank.entity';
import { CompetencyItem } from '@modules/master/competency-item/entities/competency-item.entity';
import { Province } from '@modules/master/province/entities/province.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('industry_classifications')
export class IndustryClassification extends AuditBaseEntity {
    @Column()
    number: string;

    @Column()
    name: string;

    @Column({ nullable: true, length: 4000 })
    description: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;

    @ManyToMany(
        () => CompetencyItem,
        (competencyItem) => competencyItem.industryClassifications,
    )
    @JoinTable({
        name: 'industry_class_has_competency_items',
        joinColumn: {
            name: 'industry_classification_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'competency_item_id',
            referencedColumnName: 'id',
        },
    })
    competencyItems: CompetencyItem[];
}
