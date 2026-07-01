import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { User } from "@modules/uman/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('financial_periods')
export class FinancialPeriod extends AuditBaseEntity {

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