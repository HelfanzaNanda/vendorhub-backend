import { TitleResponseDto } from '../dto/response-title.dto';
import { Title } from '../entities/title.entity';

export class TitleMapper {
    static toResponse(entity: Title): TitleResponseDto {
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

    static toResponses(entities: Title[]): TitleResponseDto[] {
        return entities.map(this.toResponse);
    }
}
