import { WorkflowResponseDto } from '../dto/response-workflow.dto';
import { MasterWorkflow } from '../entities/workflow.entity';

export class WorkflowMapper {
    static toResponse(entity: MasterWorkflow): WorkflowResponseDto {
        return {
            id: entity.id,
            code: entity.code,
            name: entity.name,
            description: entity.description,
            version: entity.version,
            isActive: entity.isActive,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: MasterWorkflow[]): WorkflowResponseDto[] {
        return entities.map(this.toResponse);
    }
}
