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
            site: entity.site,
            businessType: entity.businessType ?? null,
            staffCount: entity.staffCount ?? null,
            address: entity.address ?? null,
            country: entity.country ?? null,
            province: entity.province ?? null,
            city: entity.city ?? null,
            mapUrl: entity.mapUrl ?? null,
            postalCode: entity.postalCode ?? null,
            website: entity.website ?? null,
        };
    }

    static toResponses(
        entities: VendorCompanyTemp[],
    ): VendorCompanyTempResponseDto[] {
        return entities.map(this.toResponse);
    }
}
