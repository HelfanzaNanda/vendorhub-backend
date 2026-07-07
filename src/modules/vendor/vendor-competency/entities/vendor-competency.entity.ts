import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { CompetencyItem } from '@modules/master/competency-item/entities/competency-item.entity';
import { VendorCustomerReference } from './vendor-customer-reference.entity';
import { OneToMany } from 'typeorm';

@Entity('vendor_competencies')
export class VendorCompetency extends AuditBaseEntity {
    @Column({ name: 'vendor_id', type: 'int', nullable: true })
    vendorId?: number;

    @Column({ name: 'sub_category_item_id', type: 'int', nullable: true })
    subCategoryItemId?: number;

    @ManyToOne(() => Vendor, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_id' })
    vendor?: Vendor;

    @ManyToOne(() => CompetencyItem, { nullable: true })
    @JoinColumn({ name: 'sub_category_item_id' })
    subCategoryItem?: CompetencyItem;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;

    @OneToMany(() => VendorCustomerReference, (vcr) => vcr.vendorCompetency)
    customerReferences?: VendorCustomerReference[];
}
