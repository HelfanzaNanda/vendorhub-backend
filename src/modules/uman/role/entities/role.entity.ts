import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { AuditColumns } from '@common/entities/audit.embedded';
import { Permission } from '@modules/uman/permission/entities/permission.entity';
import { UserHasRole } from '@modules/uman/user-has-roles/entities/user-has-role.entity';
import { User } from '@modules/uman/user/entities/user.entity';
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

@Entity('roles')
export class Role extends AuditBaseEntity {
    @Column({ unique: true })
    code: string;

    @Column({ unique: true })
    name: string;

    @ManyToMany(() => Permission, (permission) => permission.roles)
    @JoinTable({
        name: 'role_has_permissions',
        joinColumn: { name: 'role_id', referencedColumnName: 'id' },
        inverseJoinColumn: {
            name: 'permission_id',
            referencedColumnName: 'id',
        },
    })
    permissions: Permission[];

    @OneToMany(() => UserHasRole, (uhr) => uhr.role)
    userHasRoles: UserHasRole[];

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;
}
