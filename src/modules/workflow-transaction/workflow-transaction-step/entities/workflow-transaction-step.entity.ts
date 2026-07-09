import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import { MasterWorkflowStep } from '@modules/master/workflow-step/entities/workflow-step.entity';
import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('workflow_transaction_steps')
export class WorkflowTransactionStep extends AuditBaseEntity {
    @Column({ name: 'workflow_transaction_id' })
    workflowTransactionId: number;

    @ManyToOne(() => WorkflowTransaction)
    @JoinColumn({ name: 'workflow_transaction_id' })
    workflowTransaction: WorkflowTransaction;

    @Column({ name: 'workflow_step_id' })
    workflowStepId: number;

    @ManyToOne(() => MasterWorkflowStep)
    @JoinColumn({ name: 'workflow_step_id' })
    workflowStep: MasterWorkflowStep;

    @Column({ name: 'user_id', nullable: true })
    userId?: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user?: User;

    @Column({ name: 'delegation_user_id', nullable: true })
    delegationUserId?: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'delegation_user_id' })
    delegationUser?: User;

    @Column({
        type: 'enum',
        enum: ['WAITING', 'PENDING', 'APPROVED', 'REJECTED', 'REVISED'],
        default: 'WAITING'
    })
    status: 'WAITING' | 'PENDING' | 'APPROVED' | 'REJECTED' | 'REVISED';

    @Column({ name: 'assigned_at', type: 'timestamp', nullable: true })
    assignedAt?: Date;

    @Column({ name: 'due_at', type: 'timestamp', nullable: true })
    dueAt?: Date;

    @Column({ name: 'action_at', type: 'timestamp', nullable: true })
    actionAt?: Date;

    @Column({ type: 'text', nullable: true })
    remarks?: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
