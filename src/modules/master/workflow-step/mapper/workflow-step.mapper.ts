import { WorkflowStepResponseDto } from '../dto/response-workflow-step.dto';
import { MasterWorkflowStep } from '../entities/workflow-step.entity';

export class WorkflowStepMapper {
    static toResponse(entity: MasterWorkflowStep): WorkflowStepResponseDto {
        return {
            id: entity.id,
            workflowId: entity.workflowId,
            sequence: entity.sequence,
            code: entity.code,
            name: entity.name,
            assignmentType: entity.assignmentType,
            canApprove: entity.canApprove,
            canReject: entity.canReject,
            canRevise: entity.canRevise,
            slaDuration: entity.slaDuration,
            slaUnit: entity.slaUnit,
            useWorkingCalendar: entity.useWorkingCalendar,
            isStart: entity.isStart,
            isEnd: entity.isEnd,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: MasterWorkflowStep[]): WorkflowStepResponseDto[] {
        return entities.map(this.toResponse);
    }
}
