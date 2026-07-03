import { VendorDocumentResponseDto } from "../dto/response-vendor-document.dto";
import { VendorDocument } from "../entities/vendor-document.entity";

export class VendorDocumentMapper {
    static toResponse(entity: VendorDocument): VendorDocumentResponseDto {
        return {
            id: entity.id,
            vendorId: entity.vendorId ?? null,
            documentTypeId: entity.documentTypeId ?? null,
            documentNumber: entity.documentNumber ?? null,
            address: entity.address ?? null,
            taxpayerStatus: entity.taxpayerStatus ?? null,
            publishDate: entity.publishDate ?? null,
            expiredDate: entity.expiredDate ?? null,
            fileId: entity.fileId ?? null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: VendorDocument[]): VendorDocumentResponseDto[] {
        return entities.map(this.toResponse);
    }
}
