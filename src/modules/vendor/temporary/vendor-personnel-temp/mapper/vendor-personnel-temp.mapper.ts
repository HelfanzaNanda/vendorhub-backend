import { VendorPersonnelTempResponseDto } from '../dto/response-vendor-personnel-temp.dto';
import { VendorPersonnelTemp } from '../entities/vendor-personnel-temp.entity';

export class VendorPersonnelTempMapper {
    static toResponse(
        entity: VendorPersonnelTemp,
    ): VendorPersonnelTempResponseDto {
        return {
            id: entity.id,
            vendorTempId: entity.vendorTempId ?? null,
            vendorPicId: entity.vendorPicId ?? null,
            action: entity.action ?? null,
            reviewStatus: entity.reviewStatus ?? null,
            reviewNotes: entity.reviewNotes ?? null,
            personnelTypeId: entity.personnelTypeId ?? null,
            titleId: entity.titleId ?? null,
            name: entity.name ?? null,
            jobTypeId: entity.jobTypeId ?? null,
            position: entity.position ?? null,
            identityTypeId: entity.identityTypeId ?? null,
            identityNumber: entity.identityNumber ?? null,
            email: entity.email ?? null,
            phone: entity.phone ?? null,
            ownershipPercentage: entity.ownershipPercentage ?? null,
            privyId: entity.privyId ?? null,
            enterpriseId: entity.enterpriseId ?? null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(
        entities: VendorPersonnelTemp[],
    ): VendorPersonnelTempResponseDto[] {
        return entities.map(this.toResponse);
    }
}
