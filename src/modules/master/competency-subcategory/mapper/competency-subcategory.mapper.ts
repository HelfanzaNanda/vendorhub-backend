import { CompetencySubCategoryResponseDto } from '../dto/response-competency-subcategory.dto';
import { CompetencySubCategory } from '../entities/competency-subcategory.entity';

export class CompetencySubCategoryMapper {
    static toResponse(
        entity: CompetencySubCategory,
    ): CompetencySubCategoryResponseDto {
        return {
            id: entity.id,
            name: entity.name,
            competencyCategory: entity.competencyCategory
                ? {
                      id: entity.competencyCategory.id,
                      name: entity.competencyCategory.name,
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
        entities: CompetencySubCategory[],
    ): CompetencySubCategoryResponseDto[] {
        return entities.map(this.toResponse);
    }
}
