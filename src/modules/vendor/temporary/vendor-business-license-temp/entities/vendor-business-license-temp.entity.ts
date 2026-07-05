import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { VendorBusinessLicense } from '@modules/vendor/vendor-business-license/entities/vendor-business-license.entity';
import { File } from '@modules/master/file/entities/file.entity';

@Entity('vendor_business_license_temps')
export class VendorBusinessLicenseTemp extends AuditBaseEntity {
    @Column({ name: 'vendor_temp_id', type: 'int', nullable: true })
    vendorTempId?: number;

    @Column({ name: 'vendor_business_license_id', type: 'int', nullable: true })
    vendorBusinessLicenseId?: number;

    @Column({ name: 'action', nullable: true })
    action?: string;

    @Column({ name: 'review_status', nullable: true })
    reviewStatus?: string;

    @Column({ type: 'text', nullable: true })
    reviewNotes?: string;

    @Column({ name: 'file_id', type: 'int', nullable: true })
    fileId?: number;

    @Column({ name: 'number', nullable: true })
    number?: string;

    @Column({ type: 'text', nullable: true })
    industryClassificationIds?: string;

    @ManyToOne(() => VendorTemp, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_temp_id' })
    vendorTemp?: VendorTemp;

    @ManyToOne(() => VendorBusinessLicense, {
        nullable: true,
        onDelete: 'SET NULL',
    })
    @JoinColumn({ name: 'vendor_business_license_id' })
    vendorBusinessLicense?: VendorBusinessLicense;

    @ManyToOne(() => File, { nullable: true })
    @JoinColumn({ name: 'file_id' })
    file?: File;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
