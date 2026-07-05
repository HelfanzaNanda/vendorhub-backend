import { SiteResponseDto } from '../dto/response-site.dto';
import { Site } from '../entities/site.entity';

export class SiteMapper {
    static toResponse(entity: Site): SiteResponseDto {
        return {
            id: entity.id,
            area: entity.area.name,
            name: entity.name,
            code: entity.code,
            city: entity.city,
            address: entity.address,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: Site[]): SiteResponseDto[] {
        return entities.map(this.toResponse);
    }
}
