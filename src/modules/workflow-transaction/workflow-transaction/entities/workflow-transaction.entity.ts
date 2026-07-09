import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import { MasterWorkflow } from '@modules/master/workflow/entities/workflow.entity';
import { MasterWorkflowStep } from '@modules/master/workflow-step/entities/workflow-step.entity';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('workflow_transactions')
export class WorkflowTransaction extends AuditBaseEntity {
    @Column({ name: 'workflow_id' })
    workflowId: number;

    @ManyToOne(() => MasterWorkflow)
    @JoinColumn({ name: 'workflow_id' })
    workflow: MasterWorkflow;

    @Column({ name: 'vendor_temp_id' })
    vendorTempId: number;

    @ManyToOne(() => VendorTemp)
    @JoinColumn({ name: 'vendor_temp_id' })
    vendorTemp: VendorTemp;

    @Column({ name: 'current_step_id', nullable: true })
    currentStepId?: number;

    @ManyToOne(() => MasterWorkflowStep)
    @JoinColumn({ name: 'current_step_id' })
    currentStep?: MasterWorkflowStep;

    @Column({
        type: 'enum',
        enum: ['IN_PROGRESS', 'COMPLETED', 'CANCELLED'],
        default: 'IN_PROGRESS'
    })
    status: 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';

    @Column({ name: 'requester_id' })
    requesterId: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'requester_id' })
    requester: User;

    @Column({ name: 'submitted_at', type: 'timestamp' })
    submittedAt: Date;

    @Column({ name: 'completed_at', type: 'timestamp', nullable: true })
    completedAt?: Date;

    @Column({ name: 'cancelled_at', type: 'timestamp', nullable: true })
    cancelledAt?: Date;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
