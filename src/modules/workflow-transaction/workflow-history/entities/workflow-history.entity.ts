import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import { MasterWorkflowStep } from '@modules/master/workflow-step/entities/workflow-step.entity';
import { WorkflowTransaction } from '@modules/workflow-transaction/workflow-transaction/entities/workflow-transaction.entity';
import { WorkflowTransactionStep } from '@modules/workflow-transaction/workflow-transaction-step/entities/workflow-transaction-step.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { WorkflowTransactionStepStatus } from '@common/enums/workflow-transaction.enum';

@Entity('workflow_transaction_histories')
export class WorkflowHistory extends AuditBaseEntity {
    @Column({ name: 'workflow_transaction_id' })
    workflowTransactionId: number;

    @ManyToOne(() => WorkflowTransaction)
    @JoinColumn({ name: 'workflow_transaction_id' })
    workflowTransaction: WorkflowTransaction;

    @Column({ name: 'workflow_transaction_step_id', nullable: true })
    workflowTransactionStepId?: number;

    @ManyToOne(() => WorkflowTransactionStep)
    @JoinColumn({ name: 'workflow_transaction_step_id' })
    workflowTransactionStep?: WorkflowTransactionStep;

    @Column({ name: 'actor_id' })
    actorId: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'actor_id' })
    actor: User;

    @Column({
        type: 'enum',
        enum: WorkflowTransactionStepStatus,
        default: WorkflowTransactionStepStatus.WAITING
    })
    action: WorkflowTransactionStepStatus;

    @Column({ name: 'from_step_id', nullable: true })
    fromStepId?: number;

    @ManyToOne(() => MasterWorkflowStep)
    @JoinColumn({ name: 'from_step_id' })
    fromStep?: MasterWorkflowStep;

    @Column({ name: 'to_step_id', nullable: true })
    toStepId?: number;

    @ManyToOne(() => MasterWorkflowStep)
    @JoinColumn({ name: 'to_step_id' })
    toStep?: MasterWorkflowStep;

    @Column({ type: 'text', nullable: true })
    remarks?: string;

    @Column({ name: 'action_at', type: 'timestamp' })
    actionAt: Date;

    @Column({ name: 'assigned_at', type: 'timestamp', nullable: true })
    assignedAt?: Date;

    @Column({ name: 'due_at', type: 'timestamp', nullable: true })
    dueAt?: Date;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
