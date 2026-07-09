import { WorkflowTransactionResponseDto } from '../dto/response-workflow-transaction.dto';
import { WorkflowTransaction } from '../entities/workflow-transaction.entity';

export class WorkflowTransactionMapper {
    static toResponse(entity: WorkflowTransaction): WorkflowTransactionResponseDto {
        return {
            id: entity.id,
            workflowId: entity.workflowId,
            vendorTempId: entity.vendorTempId,
            currentStepId: entity.currentStepId,
            status: entity.status,
            requesterId: entity.requesterId,
            submittedAt: entity.submittedAt,
            completedAt: entity.completedAt,
            cancelledAt: entity.cancelledAt,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: WorkflowTransaction[]): WorkflowTransactionResponseDto[] {
        return entities.map(this.toResponse);
    }
}
