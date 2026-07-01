import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { Country } from "@modules/master/country/entities/country.entity";
import { User } from "@modules/uman/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('banks')
export class Bank extends AuditBaseEntity {

    @ManyToOne(() => Country, {
        createForeignKeyConstraints: false,
    })
    @JoinColumn({ name: 'country_id' })
    country: Country;

    @Column()
    code: string;

    @Column()
    name: string;

    
    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;

}