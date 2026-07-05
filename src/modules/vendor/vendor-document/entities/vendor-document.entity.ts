import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { DocumentType } from '@modules/master/document-type/entities/document-type.entity';
import { File } from '@modules/master/file/entities/file.entity';

@Entity('vendor_documents')
export class VendorDocument extends AuditBaseEntity {
    @Column({ name: 'vendor_id', type: 'int', nullable: true })
    vendorId?: number;

    @Column({ name: 'document_type_id', type: 'int', nullable: true })
    documentTypeId?: number;

    @Column({ name: 'document_number', nullable: true })
    documentNumber?: string;

    @Column({ type: 'text', nullable: true })
    address?: string;

    @Column({ name: 'taxpayer_status', nullable: true })
    taxpayerStatus?: string;

    @Column({ name: 'publish_date', type: 'date', nullable: true })
    publishDate?: Date;

    @Column({ name: 'expired_date', type: 'date', nullable: true })
    expiredDate?: Date;

    @Column({ name: 'file_id', type: 'int', nullable: true })
    fileId?: number;

    @ManyToOne(() => Vendor, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_id' })
    vendor?: Vendor;

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
