import { VendorStatusResponseDto } from "../dto/response-vendor-status.dto";
import { VendorStatus } from "../entities/vendor-status.entity";

export class VendorStatusMapper {
    static toResponse(entity: VendorStatus): VendorStatusResponseDto {
        return {
            id: entity.id,
            code: entity.code,
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

    static toResponses(entities: VendorStatus[]): VendorStatusResponseDto[] {
        return entities.map(this.toResponse);
    }
}
