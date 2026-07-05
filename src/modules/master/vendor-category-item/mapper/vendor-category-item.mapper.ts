import { VendorCategoryItemResponseDto } from '../dto/response-vendor-category-item.dto';
import { VendorCategoryItem } from '../entities/vendor-category-item.entity';

export class VendorCategoryItemMapper {
    static toResponse(
        entity: VendorCategoryItem,
    ): VendorCategoryItemResponseDto {
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
        entities: VendorCategoryItem[],
    ): VendorCategoryItemResponseDto[] {
        return entities.map(this.toResponse);
    }
}
