import { VendorPersonnelTempResponseDto } from '../dto/response-vendor-personnel-temp.dto';
import { VendorPersonnelTemp } from '../entities/vendor-personnel-temp.entity';

export class VendorPersonnelTempMapper {
    static toResponse(
        entity: VendorPersonnelTemp,
    ): VendorPersonnelTempResponseDto {
        return {
            id: entity.id,
            vendorTempId: entity.vendorTempId ?? null,
            vendorPicId: entity.vendorPicId ?? null,
            action: entity.action ?? null,
            reviewStatus: entity.reviewStatus ?? null,
            reviewNotes: entity.reviewNotes ?? null,
            personnelTypeId: entity.personnelTypeId ?? null,
            personnelType: entity.personnelType ? { id: entity.personnelType.id, name: entity.personnelType.name, code: entity.personnelType.code } : null,
            titleId: entity.titleId ?? null,
            title: entity.title ? { id: entity.title.id, name: entity.title.name } : null,
            name: entity.name ?? null,
            jobTypeId: entity.jobTypeId ?? null,
            jobType: entity.jobType ? { id: entity.jobType.id, name: entity.jobType.name } : null,
            position: entity.position ?? null,
            identityTypeId: entity.identityTypeId ?? null,
            identityType: entity.identityType ? { id: entity.identityType.id, name: entity.identityType.name } : null,
            identityNumber: entity.identityNumber ?? null,
            email: entity.email ?? null,
            phone: entity.phone ?? null,
            ownershipPercentage: entity.ownershipPercentage ?? null,
            privyId: entity.privyId ?? null,
            enterpriseId: entity.enterpriseId ?? null,
            hasAuthorityLimitation: entity.hasAuthorityLimitation ?? null,
            authorityLimitationNotes: entity.authorityLimitationNotes ?? null,
            authorityLimitationExpiredAt: entity.authorityLimitationExpiredAt ?? null,
            authorityLimitationFile: entity.authorityLimitationFile ? { 
                id: entity.authorityLimitationFile.id, 
                fileName: entity.authorityLimitationFile.fileName, 
                fileSize: entity.authorityLimitationFile.fileSize, 
                mimeType: entity.authorityLimitationFile.mimeType
            } : null,
            audit: {
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                createdBy: entity.createdByUser?.username ?? null,
                updatedBy: entity.updatedByUser?.username ?? null,
            },
        };
    }

    static toResponses(
        entities: VendorPersonnelTemp[],
    ): VendorPersonnelTempResponseDto[] {
        return entities.map(this.toResponse);
    }
}
