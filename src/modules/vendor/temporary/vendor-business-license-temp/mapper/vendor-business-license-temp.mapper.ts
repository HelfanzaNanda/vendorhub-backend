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
            // nibFileId: entity.fileId ? { id: entity.fileId } : null,
            file: entity.file
                ? {
                      id: entity.file.id,
                      uuid : entity.file.uuid,
                      originalName: entity.file.originalFileName,
                      filename: entity.file.fileName,
                      mimeType: entity.file.mimeType,
                      size: entity.file.fileSize,
                      url: `/files/download/${entity.file.id}`,
                  }
                : null,
            industryClassifications: industryClassifications.map(ic => ({
                id: ic.id,
                number: ic.number,
                name: ic.name,
                description: ic.description,
            }))
        };
    }

    static toResponses(
        entities: VendorBusinessLicenseTemp[],
    ): VendorBusinessLicenseTempResponseDto[] {
        return entities.map(e => this.toResponse(e));
    }
}
