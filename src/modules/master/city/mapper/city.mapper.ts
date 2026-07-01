import { CityResponseDto } from "../dto/response-city.dto";
import { City } from "../entities/city.entity";

export class CityMapper {
    static toResponse(entity: City): CityResponseDto {
        return {
            id: entity.id,
            name: entity.name,
            province: entity.province ? { id: entity.province.id, name: entity.province.name } : null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: City[]): CityResponseDto[] {
        return entities.map(this.toResponse);
    }
}
