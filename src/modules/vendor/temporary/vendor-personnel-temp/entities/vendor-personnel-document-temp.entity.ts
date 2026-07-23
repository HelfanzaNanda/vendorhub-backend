import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { PersonnelDocumentEnum } from '@common/enums/personnel-type.enum';
import { VendorPersonnelTemp } from './vendor-personnel-temp.entity';
import { VendorPersonnelDocument } from '@modules/vendor/vendor-personnel/entities/vendor-personnel-document.entity';

@Entity('vendor_personnel_documents_temp')
export class VendorPersonnelDocumentTemp extends AuditBaseEntity {


    @Column({ name: 'vendor_personnel_temp_id', type: 'int', nullable: true })
    vendorPersonnelTempId?: number;

    @Column({ name: 'vendor_personnel_document_id', type: 'int', nullable: true })
    vendorPersonnelDocumentId?: number;

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

    @Column({ name: 'action', nullable: true })
    action?: string;

    @Column({ name: 'review_status', nullable: true })
    reviewStatus?: string;

    @Column({ type: 'text', nullable: true })
    reviewNotes?: string;

    @ManyToOne(() => VendorPersonnelTemp, (vpt) => vpt.documents, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_personnel_temp_id' })
    vendorPersonnelTemp?: VendorPersonnelTemp;

    @ManyToOne(() => VendorPersonnelDocument, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'vendor_personnel_document_id' })
    vendorPersonnelDocument?: VendorPersonnelDocument;


    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
