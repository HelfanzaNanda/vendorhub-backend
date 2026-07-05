import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const FILE_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    fileName: {
        column: 'c.fileName',
        searchable: true,
        orderable: true,
    },
    originalFileName: {
        column: 'c.originalFileName',
        searchable: true,
        orderable: true,
    },
    extension: {
        column: 'c.extension',
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
