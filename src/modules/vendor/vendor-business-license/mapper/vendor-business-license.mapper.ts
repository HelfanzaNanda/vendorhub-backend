import { VendorBusinessLicenseResponseDto } from '../dto/response-vendor-business-license.dto';
import { VendorBusinessLicense } from '../entities/vendor-business-license.entity';

export class VendorBusinessLicenseMapper {
    static toResponse(
        entity: VendorBusinessLicense,
    ): VendorBusinessLicenseResponseDto {
        return {
            id: entity.id,
            vendorId: entity.vendorId ?? null,
            fileId: entity.fileId ?? null,
            number: entity.number ?? null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(
        entities: VendorBusinessLicense[],
    ): VendorBusinessLicenseResponseDto[] {
        return entities.map(this.toResponse);
    }
}
