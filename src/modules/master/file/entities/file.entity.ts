import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { User } from "@modules/uman/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('files')
export class File extends AuditBaseEntity {
    @Column({ name: 'owner_id', type: 'int', nullable: true })
    ownerId?: number;

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

    @Column({ name: 'storage_disk' })
    storageDisk: string;

    @Column({ nullable: true })
    version?: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;
}
