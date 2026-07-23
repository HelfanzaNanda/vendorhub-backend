import { DateUtil } from '@common/utils/date.util';
import { VendorUserTempResponseDto } from '../dto/response-vendor-user-temp.dto';
import { VendorUserTemp } from '../entities/vendor-user-temp.entity';

export class VendorUserTempMapper {
    static toResponse(entity: VendorUserTemp): VendorUserTempResponseDto {
        return {
            id: entity.id,
            vendorTempId: entity.vendorTempId ?? null,
            vendorUserId: entity.vendorUserId ?? null,
            action: entity.action ?? null,
            reviewStatus: entity.reviewStatus ?? null,
            reviewNotes: entity.reviewNotes ?? null,
            firstname: entity.firstname ?? null,
            lastname: entity.lastname ?? null,
            username: entity.username ?? null,
            email: entity.email ?? null,
            jobTitle: entity.jobTitle ?? null,
            positionId: entity.positionId ?? null,
            position: entity.position ? { id: entity.position.id, name: entity.position.name } : null,
            effectiveStartDate: DateUtil.formatDate(entity.effectiveStartDate),
            effectiveEndDate: DateUtil.formatDate(entity.effectiveEndDate),
            phone: entity.phone ?? null,
            areaIds: entity.areaIds ?? null,
            roleIds: entity.roleIds ?? null,
            fileId: entity.fileId ?? null,
            file: entity.file ? { id: entity.file.id, name: entity.file.originalFileName } : null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(
        entities: VendorUserTemp[],
    ): VendorUserTempResponseDto[] {
        return entities.map(this.toResponse);
    }
}
