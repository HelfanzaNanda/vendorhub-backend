import { VendorAffiliationResponseDto } from '../dto/response-vendor-affiliation.dto';
import { VendorAffiliation } from '../entities/vendor-affiliation.entity';

export class VendorAffiliationMapper {
    static toResponse(entity: VendorAffiliation): VendorAffiliationResponseDto {
        return {
            id: entity.id,
            vendorId: entity.vendorId ?? null,
            affiliateTypeId: entity.affiliateTypeId ?? null,
            companyName: entity.companyName ?? null,
            npwp: entity.npwp ?? null,
            businessField: entity.businessField ?? null,
            companyBusinessEntityTypeId:
                entity.companyBusinessEntityTypeId ?? null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(
        entities: VendorAffiliation[],
    ): VendorAffiliationResponseDto[] {
        return entities.map(this.toResponse);
    }
}
