import { TermsConditionItemResponseDto } from '../dto/response-terms-condition-item.dto';
import { TermsConditionItem } from '../entities/terms-condition-item.entity';

export class TermsConditionItemMapper {
    static toResponse(
        entity: TermsConditionItem,
    ): TermsConditionItemResponseDto {
        return {
            id: entity.id,
            chapter: entity.chapter,
            title: entity.title,
            content: entity.content,
            sortOrder: entity.sortOrder,
            approvalMode: entity.approvalMode,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(
        entities: TermsConditionItem[],
    ): TermsConditionItemResponseDto[] {
        return entities.map(this.toResponse);
    }
}
