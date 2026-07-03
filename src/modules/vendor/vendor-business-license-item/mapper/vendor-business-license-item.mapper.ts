import { VendorBusinessLicenseItemResponseDto } from "../dto/response-vendor-business-license-item.dto";
import { VendorBusinessLicenseItem } from "../entities/vendor-business-license-item.entity";

export class VendorBusinessLicenseItemMapper {
    static toResponse(entity: VendorBusinessLicenseItem): VendorBusinessLicenseItemResponseDto {
        return {
            id: entity.id,
            vendorBusinessLicenseId: entity.vendorBusinessLicenseId ?? null,
            industryClassificationId: entity.industryClassificationId ?? null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: VendorBusinessLicenseItem[]): VendorBusinessLicenseItemResponseDto[] {
        return entities.map(this.toResponse);
    }
}
