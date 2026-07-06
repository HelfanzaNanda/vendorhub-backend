import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { Position } from '@modules/master/position/entities/position.entity';
import { File } from '@modules/master/file/entities/file.entity';

@Entity('vendor_user_temps')
export class VendorUserTemp extends AuditBaseEntity {
    @Column({ name: 'vendor_temp_id', type: 'int', nullable: true })
    vendorTempId?: number;

    @Column({ name: 'vendor_user_id', type: 'int', nullable: true })
    vendorUserId?: number;

    @Column({ name: 'action', nullable: true })
    action?: string;

    @Column({ name: 'review_status', nullable: true })
    reviewStatus?: string;

    @Column({ name: 'review_notes', nullable: true })
    reviewNotes?: string;

    @Column({ name: 'firstname', nullable: true })
    firstname?: string;

    @Column({ name: 'lastname', nullable: true })
    lastname?: string;

    @Column({ name: 'username', nullable: true })
    username?: string;

    @Column({ name: 'email', nullable: true })
    email?: string;

    @Column({ name: 'job_title', nullable: true })
    jobTitle?: string;

    @Column({ name: 'position_id', type: 'int', nullable: true })
    positionId?: number;

    @Column({ name: 'effective_start_date', type: 'date', nullable: true })
    effectiveStartDate?: Date;

    @Column({ name: 'effective_end_date', type: 'date', nullable: true })
    effectiveEndDate?: Date;

    @Column({ name: 'phone', nullable: true })
    phone?: string;

    @Column({ name: 'area_ids', nullable: true })
    areaIds?: string;

    @Column({ name: 'role_ids', nullable: true })
    roleIds?: string;

    @Column({ name: 'file_id', type: 'int', nullable: true })
    fileId?: number;

    @ManyToOne(() => VendorTemp, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_temp_id' })
    vendorTemp?: VendorTemp;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'vendor_user_id' })
    vendorUser?: User;

    @ManyToOne(() => Position, { nullable: true })
    @JoinColumn({ name: 'position_id' })
    position?: Position;

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
