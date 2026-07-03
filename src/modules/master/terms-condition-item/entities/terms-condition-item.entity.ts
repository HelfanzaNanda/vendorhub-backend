import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { TermsCondition } from "@modules/master/terms-condition/entities/term-condition.entity";
import { User } from "@modules/uman/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum TermsConditionItemApprovalMode {
    AUTO = 'AUTO',
    REVIEW = 'REVIEW',
}

@Entity('terms_condition_items')
export class TermsConditionItem extends AuditBaseEntity {

    @ManyToOne(() => TermsCondition, {
        createForeignKeyConstraints: false,
    })
    @JoinColumn({ name: 'terms_condition_id' })
    termsCondition: TermsCondition;
    

    @Column()
    chapter: string;

    @Column()
    title: string;

    @Column({
        type: 'longtext'
    })
    content: string;

    @Column({
        name : 'sort_order'
    })
    sortOrder: number;

    @Column({
        name : 'approval_mode',
        type: 'enum',
        enum: TermsConditionItemApprovalMode
    })
    approvalMode: TermsConditionItemApprovalMode;

    
    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;

}