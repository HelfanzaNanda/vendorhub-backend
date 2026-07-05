import { VendorCompanyResponseDto } from '../dto/response-vendor-company.dto';
import { VendorCompany } from '../entities/vendor-company.entity';

export class VendorCompanyMapper {
    static toResponse(entity: VendorCompany): VendorCompanyResponseDto {
        return {
            id: entity.id,
            vendorId: entity.vendorId ?? null,
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

    static toResponses(entities: VendorCompany[]): VendorCompanyResponseDto[] {
        return entities.map(this.toResponse);
    }
}
