import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { File } from '@modules/master/file/entities/file.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import { VendorTermConditionReview } from './vendor-term-condition-review.entity';
import { TermsCondition } from '@modules/master/terms-condition/entities/term-condition.entity';

@Entity('vendor_term_conditions')
export class VendorTermCondition extends AuditBaseEntity {
    @Column({ name: 'vendor_id', type: 'int' })
    vendorId: number;

    @ManyToOne(() => Vendor, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'vendor_id' })
    vendor: Vendor;

    @Column({ name: 'terms_condition_id', type: 'int' })
    termsConditionId: number;

    @ManyToOne(() => TermsCondition)
    @JoinColumn({ name: 'terms_condition_id' })
    termsCondition: TermsCondition;

    @Column({ name: 'vendor_name' })
    vendorName: string;

    @Column({ name: 'authorized_signatory' })
    authorizedSignatory: string;

    @Column()
    position: string;

    @Column({ name: 'supporting_document_id', type: 'int' })
    supportingDocumentId: number;

    @ManyToOne(() => File)
    @JoinColumn({ name: 'supporting_document_id' })
    supportingDocument: File;

    @Column({ name: 'signed_document_id', type: 'int' })
    signedDocumentId: number;

    @ManyToOne(() => File)
    @JoinColumn({ name: 'signed_document_id' })
    signedDocument: File;

    @OneToMany(() => VendorTermConditionReview, (review) => review.vendorTermCondition, { cascade: true })
    chapterReviews: VendorTermConditionReview[];

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
