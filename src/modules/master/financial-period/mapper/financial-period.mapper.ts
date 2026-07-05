import { FinancialPeriodResponseDto } from '../dto/response-financial-period.dto';
import { FinancialPeriod } from '../entities/financial-period.entity';

export class FinancialPeriodMapper {
    static toResponse(entity: FinancialPeriod): FinancialPeriodResponseDto {
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

    static toResponses(
        entities: FinancialPeriod[],
    ): FinancialPeriodResponseDto[] {
        return entities.map(this.toResponse);
    }
}
