import {
    VendorDocumentItemResponseDto,
} from '../dto/response-vendor-document-temp.dto';

import { VendorDocumentTemp } from '../entities/vendor-document-temp.entity';

export class VendorDocumentTempMapper {
    static toResponse(
        entity: VendorDocumentTemp,
    ): VendorDocumentItemResponseDto {
        return {
            id: entity.id,

            vendorTempId: entity.vendorTempId ?? null,
            vendorDocumentId: entity.vendorDocumentId ?? null,

            action: entity.action ?? null,
            reviewStatus: entity.reviewStatus ?? null,
            reviewNotes: entity.reviewNotes ?? null,

            documentTypeId: entity.documentTypeId ?? null,

            documentNumber: entity.documentNumber ?? null,
            address: entity.address ?? null,

            taxpayerStatus: entity.taxpayerStatus ?? null,

            publishedDate: entity.publishDate ?? null,
            expiredDate: entity.expiredDate ?? null,

            fileId: entity.fileId ?? null,

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

            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }
}