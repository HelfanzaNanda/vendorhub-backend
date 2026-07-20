import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { StorageDiskEnum } from '@common/enums/storage-disk.enum';
import { User } from '@modules/uman/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('files')
export class File extends AuditBaseEntity {
    @Column({ name: 'owner_id', type: 'int', nullable: true })
    ownerId?: number;

    @Column({
        type: 'varchar',
        length: 36,
        // unique: true,
    })
    uuid?: string;

    @Column({ name: 'reference_id', type: 'int', nullable: true })
    referenceId?: number;

    @Column({ name: 'document_type_id', type: 'int', nullable: true })
    documentTypeId?: number;

    @Column({ name: 'file_name' })
    fileName: string;

    @Column({ name: 'original_file_name' })
    originalFileName: string;

    @Column()
    extension: string;

    @Column({ name: 'mime_type' })
    mimeType: string;

    @Column({ name: 'file_size', type: 'int' })
    fileSize: number;

    @Column({ name: 'storage_path' })
    storagePath: string;

    @Column({ 
        type: 'enum',
        name: 'storage_disk',
        enum: StorageDiskEnum,
        default: StorageDiskEnum.LOCAL
    })
    storageDisk: StorageDiskEnum;

    @Column({ type: 'int', nullable: true })
    version?: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;
}
