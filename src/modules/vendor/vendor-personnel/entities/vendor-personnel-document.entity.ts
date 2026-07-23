import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { PersonnelDocumentEnum } from '@common/enums/personnel-type.enum';
import { VendorPersonnel } from './vendor-personnel.entity';

@Entity('vendor_personnel_documents')
export class VendorPersonnelDocument extends AuditBaseEntity {
    @Column({ name: 'vendor_personnel_id', type: 'int', nullable: true })
    vendorPersonnelId?: number;

    @Column({ 
        name: 'type', 
        type: 'enum',
        enum : PersonnelDocumentEnum ,
        nullable: true
    })
    type?: PersonnelDocumentEnum;

    @Column({ name: 'valid_from', type: 'date', nullable: true })
    validFrom?: Date;

    @Column({ name: 'valid_to', type: 'date', nullable: true })
    validTo?: Date;

    @ManyToOne(() => VendorPersonnel, (vc) => vc.documents, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_personnel_id' })
    vendorPersonnel?: VendorPersonnel;


    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
