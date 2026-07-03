import { CompanyPersonnelTypeResponseDto } from "../dto/response-company-personnel-type.dto";
import { CompanyPersonnelType } from "../entities/company-personnel-type.entity";

export class CompanyPersonnelTypeMapper {
    static toResponse(entity: CompanyPersonnelType): CompanyPersonnelTypeResponseDto {
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

    static toResponses(entities: CompanyPersonnelType[]): CompanyPersonnelTypeResponseDto[] {
        return entities.map(this.toResponse);
    }
}
