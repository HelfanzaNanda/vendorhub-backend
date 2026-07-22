import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';
import { DocumentType } from '@modules/master/document-type/entities/document-type.entity';
import { File } from '@modules/master/file/entities/file.entity';

@Entity('vendor_document_temps')
export class VendorDocumentTemp extends AuditBaseEntity {
    @Column({ name: 'vendor_temp_id', type: 'int', nullable: true })
    vendorTempId?: number;

    @Column({ name: 'vendor_document_id', type: 'int', nullable: true })
    vendorDocumentId?: number;

    @Column({ name: 'action', nullable: true })
    action?: string;

    @Column({ name: 'review_status', nullable: true })
    reviewStatus?: string;

    @Column({ type: 'text', nullable: true })
    reviewNotes?: string;

    @Column({ name: 'document_type_id', type: 'int', nullable: true })
    documentTypeId?: number;

    @Column({ name: 'document_number', nullable: true })
    documentNumber?: string;

    @Column({ type: 'text', nullable: true })
    address?: string;

    @Column({ name: 'taxpayer_status', type : 'tinyint', nullable: true })
    taxpayerStatus?: boolean;

    @Column({ name: 'publish_date', type: 'date', nullable: true })
    publishDate?: Date;

    @Column({ name: 'expired_date', type: 'date', nullable: true })
    expiredDate?: Date;

    @Column({ name: 'file_id', type: 'int', nullable: true })
    fileId?: number;

    @ManyToOne(() => VendorTemp, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_temp_id' })
    vendorTemp?: VendorTemp;

    @ManyToOne(() => VendorDocument, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'vendor_document_id' })
    vendorDocument?: VendorDocument;

    @ManyToOne(() => DocumentType, { nullable: true })
    @JoinColumn({ name: 'document_type_id' })
    documentType?: DocumentType;

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
