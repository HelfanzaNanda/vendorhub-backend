import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { AuditColumns } from '@common/entities/audit.embedded';
import { Menu } from '@modules/uman/menu/entities/menu.entity';
import { Role } from '@modules/uman/role/entities/role.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('permissions')
export class Permission extends AuditBaseEntity {
    @Column({ unique: true })
    name: string;

    @Column({ nullable: true })
    description: string;

    @ManyToMany(() => Role, (role) => role.permissions)
    roles: Role[];

    @ManyToMany(() => Menu, (menu) => menu.permissions)
    @JoinTable({
        name: 'permission_has_menus',
        joinColumn: { name: 'permission_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'menu_id', referencedColumnName: 'id' },
    })
    menus: Menu[];
}
