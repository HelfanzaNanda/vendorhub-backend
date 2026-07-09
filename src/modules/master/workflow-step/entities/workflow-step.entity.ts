import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import { MasterWorkflow } from '@modules/master/workflow/entities/workflow.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('workflow_steps')
export class MasterWorkflowStep extends AuditBaseEntity {
    @Column({ name: 'workflow_id' })
    workflowId: number;

    @ManyToOne(() => MasterWorkflow)
    @JoinColumn({ name: 'workflow_id' })
    workflow: MasterWorkflow;

    @Column({ type: 'int' })
    sequence: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column({ name: 'assignment_type', type: 'enum', enum: ['ROLE', 'USER'] })
    assignmentType: 'ROLE' | 'USER';

    @Column({ name: 'can_approve', type: 'boolean', default: false })
    canApprove: boolean;

    @Column({ name: 'can_reject', type: 'boolean', default: false })
    canReject: boolean;

    @Column({ name: 'can_revise', type: 'boolean', default: false })
    canRevise: boolean;

    @Column({ name: 'sla_duration', type: 'int', default: 0 })
    slaDuration: number;

    @Column({ name: 'sla_unit', type: 'enum', enum: ['DAY', 'HOUR'] })
    slaUnit: 'DAY' | 'HOUR';

    @Column({ name: 'use_working_calendar', type: 'boolean', default: false })
    useWorkingCalendar: boolean;

    @Column({ name: 'is_start', type: 'boolean', default: false })
    isStart: boolean;

    @Column({ name: 'is_end', type: 'boolean', default: false })
    isEnd: boolean;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
