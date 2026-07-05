import { RoleResponseDto } from '../dto/response-role.dto';
import { Role } from '../entities/role.entity';

export class RoleMapper {
    static toResponse(entity: Role): RoleResponseDto {
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

    static toResponses(entities: Role[]): RoleResponseDto[] {
        return entities.map(this.toResponse);
    }
}
