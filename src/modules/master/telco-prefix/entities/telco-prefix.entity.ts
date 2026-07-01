import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { Area } from "@modules/master/area/entities/area.entity";
import { User } from "@modules/uman/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('telco_prefixes')
export class TelcoPrefix extends AuditBaseEntity {

    @Column()
    name: string;
    
    @Column({nullable: true, length: 4000})
    description: string;

    
    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;

}