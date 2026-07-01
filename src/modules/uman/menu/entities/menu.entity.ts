import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { Permission } from "@modules/uman/permission/entities/permission.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('menus')
export class Menu extends AuditBaseEntity {

    @Column()
    name: string;

    @Column()
    path: string;

    @Column()
    icon: string;

    @Column({name: 'parent_id'})
    parentId: number;

    @Column({name: 'order'})
    order: number;

    @ManyToMany(() => Permission, permission => permission.menus)
    permissions: Permission[];

}