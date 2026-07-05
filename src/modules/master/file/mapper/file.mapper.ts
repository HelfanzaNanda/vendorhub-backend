import { FileResponseDto } from '../dto/response-file.dto';
import { File } from '../entities/file.entity';

export class FileMapper {
    static toResponse(entity: File): FileResponseDto {
        return {
            id: entity.id,
            ownerId: entity.ownerId,
            referenceId: entity.referenceId,
            documentTypeId: entity.documentTypeId,
            fileName: entity.fileName,
            originalFileName: entity.originalFileName,
            extension: entity.extension,
            mimeType: entity.mimeType,
            fileSize: entity.fileSize,
            storagePath: entity.storagePath,
            storageDisk: entity.storageDisk,
            version: entity.version,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: File[]): FileResponseDto[] {
        return entities.map(this.toResponse);
    }
}
