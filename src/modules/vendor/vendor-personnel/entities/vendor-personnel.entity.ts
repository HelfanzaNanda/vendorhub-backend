import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { CompanyPersonnelType } from '@modules/master/company-personnel-type/entities/company-personnel-type.entity';
import { Title } from '@modules/master/title/entities/title.entity';
import { JobType } from '@modules/master/job-type/entities/job-type.entity';
import { IdentityType } from '@modules/master/identity-type/entities/identity-type.entity';
import { File } from '@modules/master/file/entities/file.entity';
import { VendorPersonnelDocument } from './vendor-personnel-document.entity';

@Entity('vendor_personnels')
export class VendorPersonnel extends AuditBaseEntity {
    @Column({ name: 'vendor_id', type: 'int', nullable: true })
    vendorId?: number;

    @Column({ name: 'personnel_type_id', type: 'int', nullable: true })
    personnelTypeId?: number;

    @Column({ name: 'title_id', type: 'int', nullable: true })
    titleId?: number;

    @Column({ name: 'name', nullable: true })
    name?: string;

    @Column({ name: 'job_type_id', type: 'int', nullable: true })
    jobTypeId?: number;

    @Column({ name: 'position', nullable: true })
    position?: string;

    @Column({ name: 'identity_type_id', type: 'int', nullable: true })
    identityTypeId?: number;

    @Column({ name: 'identity_number', nullable: true })
    identityNumber?: string;

    @Column({ name: 'email', nullable: true })
    email?: string;

    @Column({ name: 'phone', nullable: true })
    phone?: string;

    @Column({
        name: 'ownership_percentage',
        type: 'decimal',
        precision: 18,
        scale: 2,
        nullable: true,
        transformer: {
            to: (value?: number | null) => value,
            from: (value?: string | null) =>
                value == null ? null : Number(value),
        },
    })
    ownershipPercentage?: number;

    @Column({ name: 'privy_id', nullable: true })
    privyId?: string;

    @Column({ name: 'enterprise_id', nullable: true })
    enterpriseId?: string;

    @ManyToOne(() => Vendor, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_id' })
    vendor?: Vendor;

    @ManyToOne(() => CompanyPersonnelType, { nullable: true })
    @JoinColumn({ name: 'personnel_type_id' })
    personnelType?: CompanyPersonnelType;

    @ManyToOne(() => Title, { nullable: true })
    @JoinColumn({ name: 'title_id' })
    title?: Title;

    @ManyToOne(() => JobType, { nullable: true })
    @JoinColumn({ name: 'job_type_id' })
    jobType?: JobType;

    @ManyToOne(() => IdentityType, { nullable: true })
    @JoinColumn({ name: 'identity_type_id' })
    identityType?: IdentityType;

    @Column({ type: 'boolean', name: 'has_authority_limitation', nullable: true })
    hasAuthorityLimitation?: boolean;

    @Column({ type: 'text', name: 'authority_limitation_notes', nullable: true })
    authorityLimitationNotes?: string;

    @Column({ type: 'timestamp', name: 'authority_limitation_expired_at', nullable: true })
    authorityLimitationExpiredAt?: Date;

    @Column({ type: 'int', name: 'authority_limitation_file_id', nullable: true })
    authorityLimitationFileId?: number;

    @ManyToOne(() => File, { nullable: true })
    @JoinColumn({ name: 'authority_limitation_file_id' })
    authorityLimitationFile?: File;

    @OneToMany(() => VendorPersonnelDocument, (vcr) => vcr.vendorPersonnel)
    documents?: VendorPersonnelDocument[];

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
