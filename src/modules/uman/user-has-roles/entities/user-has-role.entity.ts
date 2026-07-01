import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { AuditColumns } from "@common/entities/audit.embedded";
import { Role } from "@modules/uman/role/entities/role.entity";
import { User } from "@modules/uman/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_has_roles')
export class UserHasRole extends AuditBaseEntity {

    @ManyToOne(() => User, user => user.userHasRoles)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' }) 
    user: User;

    @ManyToOne(() => Role, role => role.userHasRoles)
    @JoinColumn({ name: 'role_id', referencedColumnName: 'id' }) 
    role: Role;

    @Column({
        name: 'is_active',
        default: true,
        type: 'boolean'
    })
    isActive: boolean;

    @Column({
        name: 'effective_start_date',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    effectiveStartDate: Date;

    @Column({
        name: 'effective_end_date',
        type: 'timestamp'
    })
    effectiveEndDate: Date;
}
