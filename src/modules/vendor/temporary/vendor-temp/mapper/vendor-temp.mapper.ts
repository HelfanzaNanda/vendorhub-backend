import { VendorTempResponseDto } from "../dto/response-vendor-temp.dto";
import { VendorTemp } from "../entities/vendor-temp.entity";

export class VendorTempMapper {
    static toResponse(entity: VendorTemp): VendorTempResponseDto {
        return {
            id: entity.id,
            vendorId: entity.vendorId ?? null,
            requestNo: entity.requestNo ?? null,
            status: entity.status ?? null,
            submittedAt: entity.submittedAt ?? null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: VendorTemp[]): VendorTempResponseDto[] {
        return entities.map(this.toResponse);
    }
}
