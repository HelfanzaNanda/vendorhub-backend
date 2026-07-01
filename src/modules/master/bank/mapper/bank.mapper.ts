import { BankResponseDto } from "../dto/response-bank.dto";
import { Bank } from "../entities/bank.entity";

export class BankMapper {
    static toResponse(entity: Bank): BankResponseDto {
        return {
            id: entity.id,
            country: entity.country.name,
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

    static toResponses(entities: Bank[]): BankResponseDto[] {
        return entities.map(this.toResponse);
    }
}
