import { IdentityTypeResponseDto } from '../dto/response-identity-type.dto';
import { IdentityType } from '../entities/identity-type.entity';

export class IdentityTypeMapper {
    static toResponse(entity: IdentityType): IdentityTypeResponseDto {
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

    static toResponses(entities: IdentityType[]): IdentityTypeResponseDto[] {
        return entities.map(this.toResponse);
    }
}
