import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from '@modules/uman/user/entities/user.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { AffiliateType } from '@modules/master/affiliate-type/entities/affiliate-type.entity';
import { BusinessEntityType } from '@modules/master/business-entity-type/entities/business-entity-type.entity';

@Entity('vendor_affiliations')
export class VendorAffiliation extends AuditBaseEntity {
    @Column({ name: 'vendor_id', type: 'int', nullable: true })
    vendorId?: number;

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

    @ManyToOne(() => Vendor, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_id' })
    vendor?: Vendor;

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
