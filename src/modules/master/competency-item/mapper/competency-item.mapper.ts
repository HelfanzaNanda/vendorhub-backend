import { CompetencyItemResponseDto } from '../dto/response-competency-item.dto';
import { CompetencyItem } from '../entities/competency-item.entity';

export class CompetencyItemMapper {
    static toResponse(entity: CompetencyItem): CompetencyItemResponseDto {
        return {
            id: entity.id,
            code: entity.code,
            name: entity.name,
            description: entity.description,
            competencySubCategory: entity.competencySubCategory
                ? {
                      id: entity.competencySubCategory.id,
                      name: entity.competencySubCategory.name,
                  }
                : null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(
        entities: CompetencyItem[],
    ): CompetencyItemResponseDto[] {
        return entities.map(this.toResponse);
    }
}
