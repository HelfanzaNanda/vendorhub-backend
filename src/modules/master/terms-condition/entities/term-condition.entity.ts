import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { TermsConditionItem } from "@modules/master/terms-condition-item/entities/terms-condition-item.entity";
import { User } from "@modules/uman/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('terms_conditions')
export class TermsCondition extends AuditBaseEntity {

    @Column()
    version: string;

    @Column()
    title: string;

    @Column()
    status: boolean;

    
    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;

    @OneToMany(
        () => TermsConditionItem,
        item => item.termsCondition,
    )
    items: TermsConditionItem[];

}