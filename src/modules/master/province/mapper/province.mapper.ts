import { ProvinceResponseDto } from '../dto/response-province.dto';
import { Province } from '../entities/province.entity';

export class ProvinceMapper {
    static toResponse(entity: Province): ProvinceResponseDto {
        return {
            id: entity.id,
            name: entity.name,
            country: entity.country
                ? { id: entity.country.id, name: entity.country.name }
                : null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: Province[]): ProvinceResponseDto[] {
        return entities.map(this.toResponse);
    }
}
