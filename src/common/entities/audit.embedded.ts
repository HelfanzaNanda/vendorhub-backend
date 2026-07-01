import {
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    Column,
} from 'typeorm';

export class AuditColumns {
    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
    deletedAt?: Date;

    @Column({ name: 'created_by', type: 'int', nullable: true })
    createdBy?: number;

    @Column({ name: 'updated_by', type: 'int', nullable: true })
    updatedBy?: number;

    @Column({ name: 'deleted_by', type: 'int', nullable: true })
    deletedBy?: number;
}
