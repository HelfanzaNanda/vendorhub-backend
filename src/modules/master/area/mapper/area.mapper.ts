import { AreaResponseDto } from '../dto/response-area.dto';
import { Area } from '../entities/area.entity';

export class AreaMapper {
    static toResponse(entity: Area): AreaResponseDto {
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

    static toResponses(entities: Area[]): AreaResponseDto[] {
        return entities.map(this.toResponse);
    }
}
