import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { VendorPersonnel } from '@modules/vendor/vendor-personnel/entities/vendor-personnel.entity';
import { CompanyPersonnelType } from '@modules/master/company-personnel-type/entities/company-personnel-type.entity';
import { Title } from '@modules/master/title/entities/title.entity';
import { JobType } from '@modules/master/job-type/entities/job-type.entity';
import { IdentityType } from '@modules/master/identity-type/entities/identity-type.entity';
import { File } from '@modules/master/file/entities/file.entity';

@Entity('vendor_personnel_temps')
export class VendorPersonnelTemp extends AuditBaseEntity {
    @Column({ name: 'vendor_temp_id', type: 'int', nullable: true })
    vendorTempId?: number;

    @Column({ name: 'vendor_pic_id', type: 'int', nullable: true })
    vendorPicId?: number;

    @Column({ name: 'action', nullable: true })
    action?: string;

    @Column({ name: 'review_status', nullable: true })
    reviewStatus?: string;

    @Column({ type: 'text', name: 'review_notes', nullable: true })
    reviewNotes?: string;

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
    })
    ownershipPercentage?: number;

    @Column({ name: 'privy_id', nullable: true })
    privyId?: string;

    @Column({ name: 'enterprise_id', nullable: true })
    enterpriseId?: string;

    @ManyToOne(() => VendorTemp, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_temp_id' })
    vendorTemp?: VendorTemp;

    @ManyToOne(() => VendorPersonnel, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'vendor_pic_id' })
    vendorPersonnel?: VendorPersonnel;

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

    @Column({ type: 'text', name: 'npwp_number', nullable: true })
    npwpNumber?: string;


    @ManyToOne(() => File, { nullable: true })
    @JoinColumn({ name: 'authority_limitation_file_id' })
    authorityLimitationFile?: File;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
