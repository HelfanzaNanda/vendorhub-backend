import { TermsConditionResponseDto } from "../dto/response-term-condition.dto";
import { TermsCondition } from "../entities/term-condition.entity";

export class TermsConditionMapper {
    static toResponse(entity: TermsCondition): TermsConditionResponseDto {
        return {
            id: entity.id,
            title: entity.title,
            version: entity.version,
            status : entity.status,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: TermsCondition[]): TermsConditionResponseDto[] {
        return entities.map(this.toResponse);
    }
}
