import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { User } from '@modules/uman/user/entities/user.entity';
import { Role } from '@modules/uman/role/entities/role.entity';
import { Area } from '@modules/master/area/entities/area.entity';
import { MasterWorkflowStep } from '@modules/master/workflow-step/entities/workflow-step.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('workflow_step_assignments')
export class MasterWorkflowStepAssignment extends AuditBaseEntity {
    @Column({ name: 'workflow_step_id' })
    workflowStepId: number;

    @ManyToOne(() => MasterWorkflowStep)
    @JoinColumn({ name: 'workflow_step_id' })
    workflowStep: MasterWorkflowStep;

    @Column({ name: 'area_id', nullable: true })
    areaId?: number;

    @ManyToOne(() => Area)
    @JoinColumn({ name: 'area_id' })
    area?: Area;

    @Column({ name: 'role_id', nullable: true })
    roleId?: number;

    @ManyToOne(() => Role)
    @JoinColumn({ name: 'role_id' })
    role?: Role;

    @Column({ name: 'user_id', nullable: true })
    userId?: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user?: User;

    @Column({ name: 'is_active', type: 'boolean', default: true })
    isActive: boolean;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
