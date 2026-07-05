import { AffiliateTypeResponseDto } from '../dto/response-affiliate-type.dto';
import { AffiliateType } from '../entities/affiliate-type.entity';

export class AffiliateTypeMapper {
    static toResponse(entity: AffiliateType): AffiliateTypeResponseDto {
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

    static toResponses(entities: AffiliateType[]): AffiliateTypeResponseDto[] {
        return entities.map(this.toResponse);
    }
}
