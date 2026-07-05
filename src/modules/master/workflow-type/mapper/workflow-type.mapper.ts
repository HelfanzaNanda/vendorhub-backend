import { WorkflowTypeResponseDto } from '../dto/response-workflow-type.dto';
import { WorkflowType } from '../entities/workflow-type.entity';

export class WorkflowTypeMapper {
    static toResponse(entity: WorkflowType): WorkflowTypeResponseDto {
        return {
            id: entity.id,
            code: entity.code,
            name: entity.name,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: WorkflowType[]): WorkflowTypeResponseDto[] {
        return entities.map(this.toResponse);
    }
}
