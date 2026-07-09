import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const WORKING_CALENDAR_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    dayOfWeek: {
        column: 'c.dayOfWeek',
        searchable: true,
        orderable: true,
    },
    startTime: {
        column: 'c.startTime',
        searchable: true,
        orderable: true,
    },
    endTime: {
        column: 'c.endTime',
        searchable: true,
        orderable: true,
    },
    isWorkingDay: {
        column: 'c.isWorkingDay',
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
