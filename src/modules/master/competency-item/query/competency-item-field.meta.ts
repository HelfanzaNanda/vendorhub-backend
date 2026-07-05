import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const COMPETENCY_ITEM_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    code: {
        column: 'c.code',
        searchable: true,
        orderable: true,
    },
    name: {
        column: 'c.name',
        searchable: true,
        orderable: true,
    },
    description: {
        column: 'c.description',
        searchable: true,
        orderable: true,
    },
    competencySubCategory: {
        column: 'competencySubCategory.name',
        searchable: true,
    },
    createdAt: {
        column: 'c.createdAt',
        orderable: true,
    },
    createdBy: {
        column: 'createdByUser.username',
    },
    updatedAt: {
        column: 'c.updatedAt',
        orderable: true,
    },
    updatedBy: {
        column: 'updatedByUser.username',
    },
};
