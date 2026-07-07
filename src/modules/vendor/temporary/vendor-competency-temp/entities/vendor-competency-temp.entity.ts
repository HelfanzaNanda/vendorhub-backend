import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { VendorCompetency } from '@modules/vendor/vendor-competency/entities/vendor-competency.entity';
import { CompetencyItem } from '@modules/master/competency-item/entities/competency-item.entity';
import { VendorCustomerReferenceTemp } from './vendor-customer-reference-temp.entity';
import { OneToMany } from 'typeorm';

@Entity('vendor_competency_temps')
export class VendorCompetencyTemp extends AuditBaseEntity {
    @Column({ name: 'vendor_temp_id', type: 'int', nullable: true })
    vendorTempId?: number;

    @Column({ name: 'vendor_competency_id', type: 'int', nullable: true })
    vendorCompetencyId?: number;

    @Column({ name: 'action', nullable: true })
    action?: string;

    @Column({ name: 'review_status', nullable: true })
    reviewStatus?: string;

    @Column({ type: 'text', nullable: true })
    reviewNotes?: string;

    @Column({ name: 'sub_category_item_id', type: 'int', nullable: true })
    subCategoryItemId?: number;

    @ManyToOne(() => VendorTemp, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_temp_id' })
    vendorTemp?: VendorTemp;

    @ManyToOne(() => VendorCompetency, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'vendor_competency_id' })
    vendorCompetency?: VendorCompetency;

    @ManyToOne(() => CompetencyItem, { nullable: true })
    @JoinColumn({ name: 'sub_category_item_id' })
    subCategoryItem?: CompetencyItem;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;

    @OneToMany(() => VendorCustomerReferenceTemp, (vcrt) => vcrt.vendorCompetencyTemp)
    customerReferences?: VendorCustomerReferenceTemp[];
}
