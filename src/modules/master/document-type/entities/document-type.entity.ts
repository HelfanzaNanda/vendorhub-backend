import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { DocumentTypeCategoryEnum } from '@common/enums/document-type.enum';
import { User } from '@modules/uman/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('document_types')
export class DocumentType extends AuditBaseEntity {
    @Column()
    code: string;

    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: DocumentTypeCategoryEnum
    })
    category: DocumentTypeCategoryEnum;

    @Column({ nullable: true })
    description: string;

    @Column({ type: 'json' })
    accept: Array<string>;

    @Column({ type: 'bigint', name: 'max_size' })
    maxSize: number;

    @Column({ default: false, type: 'boolean' })
    multiple: boolean;

    @Column({ default: false, type: 'boolean' })
    required: boolean;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;
}
