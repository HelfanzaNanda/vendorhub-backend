import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { Bank } from "@modules/master/bank/entities/bank.entity";
import { Province } from "@modules/master/province/entities/province.entity";
import { User } from "@modules/uman/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('cities')
export class City extends AuditBaseEntity {

    @ManyToOne(() => Province, {
        createForeignKeyConstraints: false,
    })
    @JoinColumn({ name: 'province_id' })
    province: Province;

    @Column()
    name: string;

    
    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;

}