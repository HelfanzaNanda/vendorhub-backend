import { PositionResponseDto } from "../dto/response-position.dto";
import { Position } from "../entities/position.entity";

export class PositionMapper {
    static toResponse(entity: Position): PositionResponseDto {
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

    static toResponses(entities: Position[]): PositionResponseDto[] {
        return entities.map(this.toResponse);
    }
}
