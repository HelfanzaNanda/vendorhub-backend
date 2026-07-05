import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { VendorBusinessLicense } from '@modules/vendor/vendor-business-license/entities/vendor-business-license.entity';
import { IndustryClassification } from '@modules/master/industry-classification/entities/industry-classification.entity';

@Entity('vendor_business_license_items')
export class VendorBusinessLicenseItem extends AuditBaseEntity {
    @Column({ name: 'vendor_business_license_id', type: 'int', nullable: true })
    vendorBusinessLicenseId?: number;

    @Column({ name: 'industry_classification_id', type: 'int', nullable: true })
    industryClassificationId?: number;

    @ManyToOne(() => VendorBusinessLicense, {
        onDelete: 'CASCADE',
        nullable: true,
    })
    @JoinColumn({ name: 'vendor_business_license_id' })
    vendorBusinessLicense?: VendorBusinessLicense;

    @ManyToOne(() => IndustryClassification, { nullable: true })
    @JoinColumn({ name: 'industry_classification_id' })
    industryClassification?: IndustryClassification;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
