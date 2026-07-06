import { CurrencyResponseDto } from '../dto/response-currency.dto';
import { Currency } from '../entities/currency.entity';

export class CurrencyMapper {
    static toResponse(entity: Currency): CurrencyResponseDto {
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

    static toResponses(entities: Currency[]): CurrencyResponseDto[] {
        return entities.map(this.toResponse);
    }
}
