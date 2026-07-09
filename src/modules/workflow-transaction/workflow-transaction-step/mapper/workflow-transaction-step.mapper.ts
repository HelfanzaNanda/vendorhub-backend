import { WorkflowTransactionStepResponseDto } from '../dto/response-workflow-transaction-step.dto';
import { WorkflowTransactionStep } from '../entities/workflow-transaction-step.entity';

export class WorkflowTransactionStepMapper {
    static toResponse(entity: WorkflowTransactionStep): WorkflowTransactionStepResponseDto {
        return {
            id: entity.id,
            workflowTransactionId: entity.workflowTransactionId,
            workflowStepId: entity.workflowStepId,
            userId: entity.userId,
            delegationUserId: entity.delegationUserId,
            status: entity.status,
            assignedAt: entity.assignedAt,
            dueAt: entity.dueAt,
            actionAt: entity.actionAt,
            remarks: entity.remarks,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: WorkflowTransactionStep[]): WorkflowTransactionStepResponseDto[] {
        return entities.map(this.toResponse);
    }
}
