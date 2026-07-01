import { VendorPriorityResponseDto } from "../dto/response-vendor-priority.dto";
import { VendorPriority } from "../entities/vendor-priority.entity";

export class VendorPriorityMapper {
    static toResponse(entity: VendorPriority): VendorPriorityResponseDto {
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

    static toResponses(entities: VendorPriority[]): VendorPriorityResponseDto[] {
        return entities.map(this.toResponse);
    }
}
