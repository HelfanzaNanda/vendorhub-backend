import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const WORKFLOW_FIELDS: FieldMetaMap = {
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
    version: {
        column: 'c.version',
        searchable: true,
        orderable: true,
    },
    isActive: {
        column: 'c.isActive',
        searchable: true,
        orderable: true,
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
