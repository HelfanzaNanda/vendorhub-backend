import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('running_numbers')
export class RunningNumber {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    prefix: string;

    @Column({
        type: 'int',
        name: 'last_number',
    })
    lastNumber: string;

    @Column({
        name: 'reset_type',
        type: 'enum',
        enum: ['DAILY', 'MONTHLY', 'YEARLY', 'NEVER'],
    })
    resetType: string;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
    })
    updatedAt: Date;
}
