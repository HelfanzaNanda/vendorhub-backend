import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';
import { VendorCategoryItem } from '@modules/master/vendor-category-item/entities/vendor-category-item.entity';
import { VendorStageEnum, VendorStatusEnum, VendorTypeEnum } from '@common/enums/vendor.enum';

@Entity('vendors')
export class Vendor extends AuditBaseEntity {
    @Column({ name: 'vendor_code', nullable: true })
    vendorCode?: string;

    @Column({
        name: 'vendor_stage',
        type: 'enum',
        enum: VendorStageEnum,
        nullable: true,
    })
    vendorStage?: VendorStageEnum;

    @Column({
        name: 'vendor_type',
        type: 'enum',
        enum: VendorTypeEnum,
        nullable: true,
    })
    vendorType?: VendorTypeEnum;

    @Column({
        type: 'enum',
        enum: VendorStatusEnum,
        nullable: true,
    })
    status?: VendorStatusEnum;

    @Column({ name: 'category_item_id', type: 'int', nullable: true })
    categoryItemId?: number;

    @ManyToOne(() => VendorCategoryItem, { nullable: true })
    @JoinColumn({ name: 'category_item_id' })
    categoryItem?: VendorCategoryItem;

    @OneToOne(() => VendorCompany, (company) => company.vendor)
    vendorCompany: VendorCompany;

    @OneToOne(() => VendorDocument, (document) => document.vendor)
    vendorDocument: VendorDocument;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
