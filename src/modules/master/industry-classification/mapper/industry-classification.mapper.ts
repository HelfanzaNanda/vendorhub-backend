import { IndustryClassificationResponseDto } from "../dto/response-industry-classification.dto";
import { IndustryClassification } from "../entities/industry-classification.entity";

export class IndustryClassificationMapper {
    static toResponse(entity: IndustryClassification): IndustryClassificationResponseDto {
        return {
            id: entity.id,
            number: entity.number,
            name: entity.name,
            description: entity.description,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: IndustryClassification[]): IndustryClassificationResponseDto[] {
        return entities.map(this.toResponse);
    }
}
