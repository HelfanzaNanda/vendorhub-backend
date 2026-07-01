import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { User } from "@modules/uman/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('affiliate_types')
export class AffiliateType extends AuditBaseEntity {

    @Column()
    name: string;

    @Column({
        name: 'description',
        nullable : true
    })
    description: string;

    
    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;

}