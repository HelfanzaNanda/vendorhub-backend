import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { Site } from '@modules/master/site/entities/site.entity';
import { BusinessEntityType } from '@modules/master/business-entity-type/entities/business-entity-type.entity';
import { Country } from '@modules/master/country/entities/country.entity';
import { Province } from '@modules/master/province/entities/province.entity';
import { City } from '@modules/master/city/entities/city.entity';

@Entity('vendor_companies')
export class VendorCompany extends AuditBaseEntity {
    @Column({ name: 'vendor_id', type: 'int', nullable: true })
    vendorId?: number;

    @Column({ name: 'company_name', nullable: true })
    companyName?: string;

    @Column({ name: 'site_id', type: 'int', nullable: true })
    siteId?: number;

    @Column({ name: 'business_type_id', type: 'int', nullable: true })
    businessTypeId?: number;

    @Column({ name: 'staff_count', type: 'int', nullable: true })
    staffCount?: number;

    @Column({ type: 'text', nullable: true })
    address?: string;

    @Column({ name: 'country_id', type: 'int', nullable: true })
    countryId?: number;

    @Column({ name: 'province_id', type: 'int', nullable: true })
    provinceId?: number;

    @Column({ name: 'city_id', type: 'int', nullable: true })
    cityId?: number;

    @Column({ name: 'map_url', length: 1000, nullable: true })
    mapUrl?: string;

    @Column({ name: 'postal_code', nullable: true })
    postalCode?: string;

    @Column({ name: 'website', nullable: true })
    website?: string;

    @ManyToOne(() => Vendor, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_id' })
    vendor?: Vendor;

    @ManyToOne(() => Site, { nullable: true })
    @JoinColumn({ name: 'site_id' })
    site?: Site;

    @ManyToOne(() => BusinessEntityType, { nullable: true })
    @JoinColumn({ name: 'business_type_id' })
    businessType?: BusinessEntityType;

    @ManyToOne(() => Country, { nullable: true })
    @JoinColumn({ name: 'country_id' })
    country?: Country;

    @ManyToOne(() => Province, { nullable: true })
    @JoinColumn({ name: 'province_id' })
    province?: Province;

    @ManyToOne(() => City, { nullable: true })
    @JoinColumn({ name: 'city_id' })
    city?: City;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
