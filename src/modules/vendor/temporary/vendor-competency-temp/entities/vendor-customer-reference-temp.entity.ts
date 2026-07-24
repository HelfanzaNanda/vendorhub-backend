import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { VendorCompetencyTemp } from './vendor-competency-temp.entity';
import { VendorCustomerReference } from '@modules/vendor/vendor-competency/entities/vendor-customer-reference.entity';
import { File } from '@modules/master/file/entities/file.entity';

@Entity('vendor_customer_reference_temps')
export class VendorCustomerReferenceTemp extends AuditBaseEntity {
    @Column({ name: 'vendor_competency_temp_id', type: 'int', nullable: true })
    vendorCompetencyTempId?: number;

    @Column({ name: 'vendor_customer_reference_id', type: 'int', nullable: true })
    vendorCustomerReferenceId?: number;

    @Column({ name: 'name', nullable: true })
    name?: string;

    @Column({ name: 'description', type: 'text', nullable: true })
    description?: string;

    @Column({ 
        name: 'project_value', 
        type: 'decimal', 
        precision: 20, 
        scale: 2, 
        nullable: true,
        transformer: {
            to: (value?: number | null) => value,
            from: (value?: string | null) =>
                value == null ? null : Number(value),
        },
    })
    projectValue?: number;

    @Column({ name: 'year', type: 'int', nullable: true })
    year?: number;

    @Column({ name: 'file_id', type: 'int', nullable: true })
    fileId?: number;

    @Column({ name: 'area_ids', nullable: true })
    areaIds?: string;

    @Column({ name: 'action', nullable: true })
    action?: string;

    @Column({ name: 'review_status', nullable: true })
    reviewStatus?: string;

    @Column({ type: 'text', nullable: true })
    reviewNotes?: string;

    @ManyToOne(() => VendorCompetencyTemp, (vct) => vct.customerReferences, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_competency_temp_id' })
    vendorCompetencyTemp?: VendorCompetencyTemp;

    @ManyToOne(() => VendorCustomerReference, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'vendor_customer_reference_id' })
    vendorCustomerReference?: VendorCustomerReference;

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
