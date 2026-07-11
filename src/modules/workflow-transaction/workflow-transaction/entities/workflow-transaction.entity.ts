import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import { MasterWorkflow } from '@modules/master/workflow/entities/workflow.entity';
import { MasterWorkflowStep } from '@modules/master/workflow-step/entities/workflow-step.entity';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Area } from '@modules/master/area/entities/area.entity';
import { WorkflowTransactionStep } from '@modules/workflow-transaction/workflow-transaction-step/entities/workflow-transaction-step.entity';
import { WorkflowTransactionStatus } from '@common/enums/workflow-transaction.enum';

@Entity('workflow_transactions')
export class WorkflowTransaction extends AuditBaseEntity {
    @Column({ name: 'workflow_id' })
    workflowId: number;

    @ManyToOne(() => MasterWorkflow)
    @JoinColumn({ name: 'workflow_id' })
    workflow: MasterWorkflow;

    @Column({ name: 'area_id' })
    areaId: number;

    @ManyToOne(() => Area)
    @JoinColumn({ name: 'area_id' })
    area: Area;

    @Column({ name: 'vendor_temp_id' })
    vendorTempId: number;

    @ManyToOne(() => VendorTemp)
    @JoinColumn({ name: 'vendor_temp_id' })
    vendorTemp: VendorTemp;

    @Column({ name: 'current_transaction_step_id', nullable: true })
    currentTransactionStepId: number;

    @ManyToOne(() => WorkflowTransactionStep)
    @JoinColumn({ name: 'current_transaction_step_id' })
    currentTransactionStep: WorkflowTransactionStep;

    @Column({
        type: 'enum',
        enum: WorkflowTransactionStatus,
        default: WorkflowTransactionStatus.IN_PROGRESS
    })
    status: WorkflowTransactionStatus;

    @Column({ name: 'requester_id' })
    requesterId: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'requester_id' })
    requester: User;

    @Column({ name: 'submitted_at', type: 'timestamp' })
    submittedAt: Date;

    @Column({ name: 'completed_at', type: 'timestamp', nullable: true })
    completedAt?: Date;

    @Column({ name: 'rejected_at', type: 'timestamp', nullable: true })
    rejectedAt?: Date;

    @Column({ name: 'revised_at', type: 'timestamp', nullable: true })
    revisedAt?: Date;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
