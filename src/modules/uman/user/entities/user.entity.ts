import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { AuditColumns } from '@common/entities/audit.embedded';
import { Position } from '@modules/master/position/entities/position.entity';
import { Site } from '@modules/master/site/entities/site.entity';
import { UserHasRole } from '@modules/uman/user-has-roles/entities/user-has-role.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
// import { CompanyIdentity } from "@modules/vendor/company-identity/entities/company-identity.entity";
import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User extends AuditBaseEntity {
    @Column({
        nullable: true,
    })
    firstname: string;

    @Column({
        nullable: true,

    })
    lastname: string;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({
        name: 'job_title',
        nullable: true,
    })
    jobTitle: string;

    @Column({
        nullable: true,
    })
    phone: string;

    @Column({
        name: 'area_ids',
        nullable: true,
    })
    areaIds: string;

    @ManyToOne(() => Position, {
        nullable: true,
        createForeignKeyConstraints: false,
    })
    @JoinColumn({ name: 'position_id' })
    position: Position;

    @ManyToOne(() => Site, {
        nullable: true,
        createForeignKeyConstraints: false,
    })
    @JoinColumn({ name: 'site_id' })
    site: Site;


    @ManyToOne(() => Vendor, {
        nullable: true,
        createForeignKeyConstraints: false,
    })
    @JoinColumn({ name: 'vendor_id' })
    vendor: Vendor;

    @Column({
        type: 'varchar',
        length: 20,
    })
    type: 'EXTERNAL' | 'INTERNAL';

    @Column({
        name: 'is_active',
        default: true,
        type: 'boolean',
    })
    isActive: boolean;

    @Column({
        name: 'effective_start_date',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    effectiveStartDate: Date;

    @Column({
        name: 'effective_end_date',
        type: 'timestamp',
    })
    effectiveEndDate: Date;

    @OneToMany(() => UserHasRole, (uhr) => uhr.user)
    userHasRoles: UserHasRole[];
}
