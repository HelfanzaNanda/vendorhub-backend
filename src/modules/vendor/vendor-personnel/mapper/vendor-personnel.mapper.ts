import { VendorPersonnelResponseDto } from '../dto/response-vendor-personnel.dto';
import { VendorPersonnel } from '../entities/vendor-personnel.entity';

export class VendorPersonnelMapper {
    static toResponse(entity: VendorPersonnel): VendorPersonnelResponseDto {
        return {
            id: entity.id,
            vendorId: entity.vendorId ?? null,
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
        entities: VendorPersonnel[],
    ): VendorPersonnelResponseDto[] {
        return entities.map(this.toResponse);
    }
}
