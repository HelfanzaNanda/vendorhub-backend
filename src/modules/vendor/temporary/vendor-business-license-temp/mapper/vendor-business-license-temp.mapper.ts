import { VendorBusinessLicenseTempResponseDto } from '../dto/response-vendor-business-license-temp.dto';
import { VendorBusinessLicenseTemp } from '../entities/vendor-business-license-temp.entity';

export class VendorBusinessLicenseTempMapper {
    static toResponse(
        entity: VendorBusinessLicenseTemp,
    ): VendorBusinessLicenseTempResponseDto {
        return {
            id: entity.id,
            vendorTempId: entity.vendorTempId ?? null,
            vendorBusinessLicenseId: entity.vendorBusinessLicenseId ?? null,
            action: entity.action ?? null,
            reviewStatus: entity.reviewStatus ?? null,
            reviewNotes: entity.reviewNotes ?? null,
            fileId: entity.fileId ?? null,
            number: entity.number ?? null,
            industryClassificationIds: entity.industryClassificationIds ?? null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(
        entities: VendorBusinessLicenseTemp[],
    ): VendorBusinessLicenseTempResponseDto[] {
        return entities.map(this.toResponse);
    }
}
