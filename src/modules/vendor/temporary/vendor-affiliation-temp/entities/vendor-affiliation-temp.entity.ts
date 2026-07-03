import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from '@modules/uman/user/entities/user.entity';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { VendorAffiliation } from '@modules/vendor/vendor-affiliation/entities/vendor-affiliation.entity';
import { AffiliateType } from '@modules/master/affiliate-type/entities/affiliate-type.entity';
import { BusinessEntityType } from '@modules/master/business-entity-type/entities/business-entity-type.entity';

@Entity('vendor_affiliation_temps')
export class VendorAffiliationTemp extends AuditBaseEntity {
    @Column({ name: 'vendor_temp_id', type: 'int', nullable: true })
    vendorTempId?: number;

    @Column({ name: 'vendor_affiliation_id', type: 'int', nullable: true })
    vendorAffiliationId?: number;

    @Column({ name: 'action', nullable: true })
    action?: string;

    @Column({ name: 'review_status', nullable: true })
    reviewStatus?: string;

    @Column({ type: 'text', nullable: true })
    reviewNotes?: string;

    @Column({ name: 'affiliate_type_id', type: 'int', nullable: true })
    affiliateTypeId?: number;

    @Column({ name: 'company_name', nullable: true })
    companyName?: string;

    @Column({ name: 'npwp', nullable: true })
    npwp?: string;

    @Column({ name: 'business_field', nullable: true })
    businessField?: string;

    @Column({ name: 'company_business_entity_type_id', type: 'int', nullable: true })
    companyBusinessEntityTypeId?: number;

    @ManyToOne(() => VendorTemp, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_temp_id' })
    vendorTemp?: VendorTemp;

    @ManyToOne(() => VendorAffiliation, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'vendor_affiliation_id' })
    vendorAffiliation?: VendorAffiliation;

    @ManyToOne(() => AffiliateType, { nullable: true })
    @JoinColumn({ name: 'affiliate_type_id' })
    affiliateType?: AffiliateType;

    @ManyToOne(() => BusinessEntityType, { nullable: true })
    @JoinColumn({ name: 'company_business_entity_type_id' })
    companyBusinessEntityType?: BusinessEntityType;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
