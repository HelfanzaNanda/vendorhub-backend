import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Area } from '@modules/master/area/entities/area.entity';
import { VendorCategory } from '@modules/master/vendor-category/entities/vendor-category.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('vendor_category_items')
export class VendorCategoryItem extends AuditBaseEntity {
    @ManyToOne(() => VendorCategory, {
        createForeignKeyConstraints: false,
    })
    @JoinColumn({ name: 'vendor_category_id' })
    vendorCategory: VendorCategory;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column({ nullable: true, length: 4000 })
    description: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;
}
