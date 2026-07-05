import { JobTypeResponseDto } from '../dto/response-job-type.dto';
import { JobType } from '../entities/job-type.entity';

export class JobTypeMapper {
    static toResponse(entity: JobType): JobTypeResponseDto {
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

    static toResponses(entities: JobType[]): JobTypeResponseDto[] {
        return entities.map(this.toResponse);
    }
}
