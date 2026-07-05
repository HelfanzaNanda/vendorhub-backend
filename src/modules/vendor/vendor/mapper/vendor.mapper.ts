import { VendorResponseDto } from '../dto/response-vendor.dto';
import { Vendor } from '../entities/vendor.entity';

export class VendorMapper {
    static toResponse(entity: Vendor): VendorResponseDto {
        return {
            id: entity.id,
            vendorCode: entity.vendorCode ?? null,
            vendorStage: entity.vendorStage ?? null,
            vendorType: entity.vendorType ?? null,
            vendorStatusId: entity.vendorStatusId ?? null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: Vendor[]): VendorResponseDto[] {
        return entities.map(this.toResponse);
    }
}
