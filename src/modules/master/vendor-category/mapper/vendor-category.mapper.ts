import { VendorCategoryResponseDto } from '../dto/response-vendor-category.dto';
import { VendorCategory } from '../entities/vendor-category.entity';

export class VendorCategoryMapper {
    static toResponse(entity: VendorCategory): VendorCategoryResponseDto {
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
        entities: VendorCategory[],
    ): VendorCategoryResponseDto[] {
        return entities.map(this.toResponse);
    }
}
