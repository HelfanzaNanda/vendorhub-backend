import { VendorAffiliationTempResponseDto } from '../dto/response-vendor-affiliation-temp.dto';
import { VendorAffiliationTemp } from '../entities/vendor-affiliation-temp.entity';

export class VendorAffiliationTempMapper {
    static toResponse(
        entity: VendorAffiliationTemp,
    ): VendorAffiliationTempResponseDto {
        return {
            id: entity.id,
            vendorTempId: entity.vendorTempId ?? null,
            vendorAffiliationId: entity.vendorAffiliationId ?? null,
            action: entity.action ?? null,
            reviewStatus: entity.reviewStatus ?? null,
            reviewNotes: entity.reviewNotes ?? null,
            affiliateTypeId: entity.affiliateTypeId ?? null,
            affiliateType: entity.affiliateType ? { id: entity.affiliateType.id, name: entity.affiliateType.name } : null,
            companyName: entity.companyName ?? null,
            npwp: entity.npwp ?? null,
            businessField: entity.businessField ?? null,
            companyBusinessEntityTypeId:
                entity.companyBusinessEntityTypeId ?? null,
            companyBusinessEntityType: entity.companyBusinessEntityType ? { id: entity.companyBusinessEntityType.id, name: entity.companyBusinessEntityType.name } : null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(
        entities: VendorAffiliationTemp[],
    ): VendorAffiliationTempResponseDto[] {
        return entities.map(this.toResponse);
    }
}
