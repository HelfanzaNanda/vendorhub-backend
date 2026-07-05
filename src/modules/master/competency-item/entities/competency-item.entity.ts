import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Bank } from '@modules/master/bank/entities/bank.entity';
import { CompetencyCategory } from '@modules/master/competency-category/entities/competency-category.entity';
import { CompetencySubCategory } from '@modules/master/competency-subcategory/entities/competency-subcategory.entity';
import { IndustryClassification } from '@modules/master/industry-classification/entities/industry-classification.entity';
import { Province } from '@modules/master/province/entities/province.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('competency_items')
export class CompetencyItem extends AuditBaseEntity {
    @ManyToOne(() => CompetencySubCategory, {
        createForeignKeyConstraints: false,
    })
    @JoinColumn({ name: 'competency_sub_category_id' })
    competencySubCategory: CompetencySubCategory;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column({
        nullable: true,
        length: 4000,
    })
    description: string;

    @ManyToMany(() => IndustryClassification, (ic) => ic.competencyItems)
    industryClassifications: IndustryClassification[];

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;
}
