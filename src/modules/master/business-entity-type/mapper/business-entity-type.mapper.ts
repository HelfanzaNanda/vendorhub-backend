import { BusinessEntityTypeResponseDto } from "../dto/response-business-entity-type.dto";
import { BusinessEntityType } from "../entities/business-entity-type.entity";

export class BusinessEntityTypeMapper {
    static toResponse(entity: BusinessEntityType): BusinessEntityTypeResponseDto {
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

    static toResponses(entities: BusinessEntityType[]): BusinessEntityTypeResponseDto[] {
        return entities.map(this.toResponse);
    }
}
