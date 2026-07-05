import { VendorCompanyTempResponseDto } from '../dto/response-vendor-company-temp.dto';
import { VendorCompanyTemp } from '../entities/vendor-company-temp.entity';

export class VendorCompanyTempMapper {
    static toResponse(entity: VendorCompanyTemp): VendorCompanyTempResponseDto {
        return {
            id: entity.id,
            vendorTempId: entity.vendorTempId ?? null,
            vendorCompanyId: entity.vendorCompanyId ?? null,
            action: entity.action ?? null,
            reviewStatus: entity.reviewStatus ?? null,
            reviewNotes: entity.reviewNotes ?? null,
            companyName: entity.companyName ?? null,
            siteId: entity.siteId ?? null,
            businessTypeId: entity.businessTypeId ?? null,
            staffCount: entity.staffCount ?? null,
            address: entity.address ?? null,
            countryId: entity.countryId ?? null,
            provinceId: entity.provinceId ?? null,
            cityId: entity.cityId ?? null,
            mapUrl: entity.mapUrl ?? null,
            postalCode: entity.postalCode ?? null,
            website: entity.website ?? null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(
        entities: VendorCompanyTemp[],
    ): VendorCompanyTempResponseDto[] {
        return entities.map(this.toResponse);
    }
}
