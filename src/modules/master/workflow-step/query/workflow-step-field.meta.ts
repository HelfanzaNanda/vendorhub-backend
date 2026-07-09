import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const WORKFLOW_STEP_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    workflowId: {
        column: 'c.workflowId',
        searchable: true,
        orderable: true,
    },
    sequence: {
        column: 'c.sequence',
        searchable: true,
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
    assignmentType: {
        column: 'c.assignmentType',
        searchable: true,
        orderable: true,
    },
    canApprove: {
        column: 'c.canApprove',
        searchable: true,
        orderable: true,
    },
    canReject: {
        column: 'c.canReject',
        searchable: true,
        orderable: true,
    },
    canRevise: {
        column: 'c.canRevise',
        searchable: true,
        orderable: true,
    },
    slaDuration: {
        column: 'c.slaDuration',
        searchable: true,
        orderable: true,
    },
    slaUnit: {
        column: 'c.slaUnit',
        searchable: true,
        orderable: true,
    },
    useWorkingCalendar: {
        column: 'c.useWorkingCalendar',
        searchable: true,
        orderable: true,
    },
    isStart: {
        column: 'c.isStart',
        searchable: true,
        orderable: true,
    },
    isEnd: {
        column: 'c.isEnd',
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
