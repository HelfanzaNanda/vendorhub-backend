import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TermsConditionItem } from '@modules/master/terms-condition-item/entities/terms-condition-item.entity';
import { VendorTermCondition } from './vendor-term-condition.entity';
import { User } from '@modules/uman/user/entities/user.entity';

export enum ReviewStatus {
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

@Entity('vendor_term_condition_reviews')
export class VendorTermConditionReview extends AuditBaseEntity {
    @Column({ name: 'vendor_term_condition_id', type: 'int' })
    vendorTermConditionId: number;

    @ManyToOne(() => VendorTermCondition, (vtc) => vtc.chapterReviews, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'vendor_term_condition_id' })
    vendorTermCondition: VendorTermCondition;

    @Column({ name: 'chapter_id', type: 'int' })
    chapterId: number;

    @ManyToOne(() => TermsConditionItem, { createForeignKeyConstraints: false })
    @JoinColumn({ name: 'chapter_id' })
    chapter: TermsConditionItem;

    @Column({ type: 'enum', enum: ReviewStatus })
    status: ReviewStatus;

    @Column({ type: 'text', nullable: true })
    reason?: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
