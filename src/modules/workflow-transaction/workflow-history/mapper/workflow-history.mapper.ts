import { WorkflowHistoryResponseDto } from '../dto/response-workflow-history.dto';
import { WorkflowHistory } from '../entities/workflow-history.entity';

export class WorkflowHistoryMapper {
    static toResponse(entity: WorkflowHistory): WorkflowHistoryResponseDto {
        return {
            id: entity.id,
            workflowTransactionId: entity.workflowTransactionId,
            workflowTransactionStepId: entity.workflowTransactionStepId,
            actorId: entity.actorId,
            action: entity.action,
            fromStepId: entity.fromStepId,
            toStepId: entity.toStepId,
            remarks: entity.remarks,
            actionAt: entity.actionAt,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: WorkflowHistory[]): WorkflowHistoryResponseDto[] {
        return entities.map(this.toResponse);
    }
}
