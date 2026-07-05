import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { VendorStatus } from '@modules/master/vendor-status/entities/vendor-status.entity';
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';

@Entity('vendors')
export class Vendor extends AuditBaseEntity {
    @Column({ name: 'vendor_code', nullable: true })
    vendorCode?: string;

    @Column({
        name: 'vendor_stage',
        type: 'enum',
        enum: ['CANDIDATE', 'VENDOR'],
        nullable: true,
    })
    vendorStage?: 'CANDIDATE' | 'VENDOR';

    @Column({
        name: 'vendor_type',
        type: 'enum',
        enum: ['LOCAL', 'FOREIGN', 'INDIVIDUAL'],
        nullable: true,
    })
    vendorType?: 'LOCAL' | 'FOREIGN' | 'INDIVIDUAL';

    @Column({ name: 'vendor_status_id', type: 'int', nullable: true })
    vendorStatusId?: number;

    @ManyToOne(() => VendorStatus, { nullable: true })
    @JoinColumn({ name: 'vendor_status_id' })
    vendorStatus?: VendorStatus;

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
