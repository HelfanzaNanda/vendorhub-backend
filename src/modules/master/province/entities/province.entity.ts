import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { Bank } from "@modules/master/bank/entities/bank.entity";
import { Country } from "@modules/master/country/entities/country.entity";
import { User } from "@modules/uman/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('provinces')
export class Province extends AuditBaseEntity {

    @ManyToOne(() => Country, {
        createForeignKeyConstraints: false,
    })
    @JoinColumn({ name: 'country_id' })
    country: Country;

    @Column()
    name: string;

    
    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;

}