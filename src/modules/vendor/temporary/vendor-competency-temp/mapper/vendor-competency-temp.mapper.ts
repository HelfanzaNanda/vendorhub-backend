export class VendorCompetencyTempMapper {
    static toResponse(entity: any) {
        return {
            id: entity.id,
            vendorTempId: entity.vendorTempId,
            vendorCompetencyId: entity.vendorCompetencyId,
            subCategoryItemId: entity.subCategoryItemId,
            action: entity.action,
            reviewStatus: entity.reviewStatus,
            reviewNotes: entity.reviewNotes,
            
            subCategoryItem: entity.subCategoryItem ? {
                id: entity.subCategoryItem.id,
                name: entity.subCategoryItem.name,
                parent: entity.subCategoryItem.competencySubCategory ? {
                    id: entity.subCategoryItem.competencySubCategory.id,
                    name: entity.subCategoryItem.competencySubCategory.name,
                    parent: entity.subCategoryItem.competencySubCategory.competencyCategory ? {
                        id: entity.subCategoryItem.competencySubCategory.competencyCategory.id,
                        name: entity.subCategoryItem.competencySubCategory.competencyCategory.name,
                    } : null
                } : null
            } : null,

            customerReferences: entity.customerReferences ? entity.customerReferences.map((ref: any) => ({
                id: ref.id,
                vendorCustomerReferenceId: ref.vendorCustomerReferenceId,
                name: ref.name,
                description: ref.description,
                projectValue: ref.projectValue ? Number(ref.projectValue) : null,
                year: ref.year ? {
                    id : ref.year,
                    name : ref.year
                } : null,
                file: ref.file ? { 
                    id: ref.file.id,
                    uuid : ref.file.uuid,
                    originalFilename: ref.file.originalFilename 
                } :  null,
                areas: ref.areas,
                action: ref.action,
                reviewStatus: ref.reviewStatus,
                reviewNotes: ref.reviewNotes,
            })) : [],
            customerReferencesCount: entity.customerReferences?.length || 0,

            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            createdByUser: entity.createdByUser ? {
                id: entity.createdByUser.id,
                username: entity.createdByUser.username,
            } : null,
            updatedByUser: entity.updatedByUser ? {
                id: entity.updatedByUser.id,
                username: entity.updatedByUser.username,
            } : null,
        };
    }

    static pagination(entity: any) {
        return {
            id: entity.id,
            vendorTempId: entity.vendorTempId,
            vendorCompetencyId: entity.vendorCompetencyId,
            subCategoryItemId: entity.subCategoryItemId,
            action: entity.action,
            reviewStatus: entity.reviewStatus,
            reviewNotes: entity.reviewNotes,
            
            subCategoryItem: entity.subCategoryItem ? {
                id: entity.subCategoryItem.id,
                name: entity.subCategoryItem.name,
                subCategory: entity.subCategoryItem.competencySubCategory ? {
                    id: entity.subCategoryItem.competencySubCategory.id,
                    name: entity.subCategoryItem.competencySubCategory.name,
                    category: entity.subCategoryItem.competencySubCategory.competencyCategory ? {
                        id: entity.subCategoryItem.competencySubCategory.competencyCategory.id,
                        name: entity.subCategoryItem.competencySubCategory.competencyCategory.name,
                    } : null
                } : null
            } : null,

            customerReferences: entity.customerReferences ? entity.customerReferences.map((ref: any) => ({
                id: ref.id,
                vendorCustomerReferenceId: ref.vendorCustomerReferenceId,
                name: ref.name,
                description: ref.description,
                projectValue: ref.projectValue ? Number(ref.projectValue) : null,
                year: ref.year,
                fileId: ref.file ? { id: ref.file.id, name: ref.file.name, path: ref.file.path } : (ref.fileId ? { id: ref.fileId } : null),
                areaIds: ref.areaIds ? ref.areaIds.split(',').map((id: string) => parseInt(id.trim(), 10)) : [],
                action: ref.action,
                reviewStatus: ref.reviewStatus,
                reviewNotes: ref.reviewNotes,
            })) : [],
            customerReferencesCount: entity.customerReferences?.length || 0,

            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            createdByUser: entity.createdByUser ? {
                id: entity.createdByUser.id,
                username: entity.createdByUser.username,
            } : null,
            updatedByUser: entity.updatedByUser ? {
                id: entity.updatedByUser.id,
                username: entity.updatedByUser.username,
            } : null,
        };
    }
}
