import { TelcoPrefixResponseDto } from '../dto/response-telco-prefix.dto';
import { TelcoPrefix } from '../entities/telco-prefix.entity';

export class TelcoPrefixMapper {
    static toResponse(entity: TelcoPrefix): TelcoPrefixResponseDto {
        return {
            id: entity.id,
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

    static toResponses(entities: TelcoPrefix[]): TelcoPrefixResponseDto[] {
        return entities.map(this.toResponse);
    }
}
