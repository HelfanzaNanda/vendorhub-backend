import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from '@modules/uman/user/entities/user.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';

@Entity('vendor_temps')
export class VendorTemp extends AuditBaseEntity {
    @Column({ name: 'vendor_id', type: 'int', nullable: true })
    vendorId?: number;

    @Column({ name: 'request_no', nullable: true })
    requestNo?: string;

    @Column({ name: 'status', type: 'enum', enum: ['DRAFT', 'SUBMITTED'], nullable: true })
    status?: 'DRAFT' | 'SUBMITTED';

    @Column({ name: 'submitted_at', type: 'timestamp', nullable: true })
    submittedAt?: Date;

    @ManyToOne(() => Vendor, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'vendor_id' })
    vendor?: Vendor;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
