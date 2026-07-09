import { WorkflowStepAssignmentResponseDto } from '../dto/response-workflow-step-assignment.dto';
import { MasterWorkflowStepAssignment } from '../entities/workflow-step-assignment.entity';

export class WorkflowStepAssignmentMapper {
    static toResponse(entity: MasterWorkflowStepAssignment): WorkflowStepAssignmentResponseDto {
        return {
            id: entity.id,
            workflowStepId: entity.workflowStepId,
            areaId: entity.areaId,
            roleId: entity.roleId,
            userId: entity.userId,
            isActive: entity.isActive,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: MasterWorkflowStepAssignment[]): WorkflowStepAssignmentResponseDto[] {
        return entities.map(this.toResponse);
    }
}
