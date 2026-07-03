import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { AuditColumns } from "@common/entities/audit.embedded";
import { UserHasRole } from "@modules/uman/user-has-roles/entities/user-has-role.entity";
// import { CompanyIdentity } from "@modules/vendor/company-identity/entities/company-identity.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User extends AuditBaseEntity {

    @Column()
    firstname: string;

    @Column()
    lastname: string;
    
    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    // @ManyToOne(() => CompanyIdentity, {
    //     nullable: true,
    //     createForeignKeyConstraints: false,
    // })
    // @JoinColumn({ name: 'company_identity_id' })
    // companyIdentity: CompanyIdentity;

    @Column({
        type: 'varchar',
        length: 20,
    })
    type: 'EXTERNAL' | 'INTERNAL';

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


    @OneToMany(() => UserHasRole, uhr => uhr.user)
    userHasRoles: UserHasRole[];
}