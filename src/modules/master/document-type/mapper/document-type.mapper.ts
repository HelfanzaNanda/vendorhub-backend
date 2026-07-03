import { DocumentTypeResponseDto } from "../dto/response-document-type.dto";
import { DocumentType } from "../entities/document-type.entity";

export class DocumentTypeMapper {
    static toResponse(entity: DocumentType): DocumentTypeResponseDto {
        return {
            id: entity.id,
            code: entity.code,
            name: entity.name,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(entities: DocumentType[]): DocumentTypeResponseDto[] {
        return entities.map(this.toResponse);
    }
}
