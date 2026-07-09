import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const HOLIDAY_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    holidayDate: {
        column: 'c.holidayDate',
        searchable: true,
        orderable: true,
    },
    holidayName: {
        column: 'c.holidayName',
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
