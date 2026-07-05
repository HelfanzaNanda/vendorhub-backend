import { CompetencyCategoryResponseDto } from '../dto/response-competency-category.dto';
import { CompetencyCategory } from '../entities/competency-category.entity';

export class CompetencyCategoryMapper {
    static toResponse(
        entity: CompetencyCategory,
    ): CompetencyCategoryResponseDto {
        return {
            id: entity.id,
            name: entity.name,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(
        entities: CompetencyCategory[],
    ): CompetencyCategoryResponseDto[] {
        return entities.map(this.toResponse);
    }
}
