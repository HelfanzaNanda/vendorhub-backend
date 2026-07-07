import { VendorBusinessLicenseTempResponseDto } from '../dto/response-vendor-business-license-temp.dto';
import { VendorBusinessLicenseTemp } from '../entities/vendor-business-license-temp.entity';
import { IndustryClassification } from '@modules/master/industry-classification/entities/industry-classification.entity';

export class VendorBusinessLicenseTempMapper {
    static toResponse(
        entity: VendorBusinessLicenseTemp,
        industryClassifications: IndustryClassification[] = [],
    ): VendorBusinessLicenseTempResponseDto {
        return {
            id: entity.id,
            vendorTempId: entity.vendorTempId ?? null,
            vendorBusinessLicenseId: entity.vendorBusinessLicenseId ?? null,
            action: entity.action ?? null,
            reviewStatus: entity.reviewStatus ?? null,
            reviewNotes: entity.reviewNotes ?? null,
            nibFileId: entity.fileId ? { id: entity.fileId } : null,
            industryClassifications: industryClassifications.map(ic => ({
                industryClassificationId: ic.id,
                number: ic.number,
                title: ic.name,
                description: ic.description,
            })),
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
        return entities.map(e => this.toResponse(e));
    }
}
