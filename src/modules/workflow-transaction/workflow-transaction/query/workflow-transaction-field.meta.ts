import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const WORKFLOW_TRANSACTION_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    workflowId: {
        column: 'c.workflowId',
        searchable: true,
        orderable: true,
    },
    vendorTempId: {
        column: 'c.vendorTempId',
        searchable: true,
        orderable: true,
    },
    currentStepId: {
        column: 'c.currentStepId',
        searchable: true,
        orderable: true,
    },
    status: {
        column: 'c.status',
        searchable: true,
        orderable: true,
    },
    requesterId: {
        column: 'c.requesterId',
        searchable: true,
        orderable: true,
    },
    submittedAt: {
        column: 'c.submittedAt',
        searchable: true,
        orderable: true,
    },
    completedAt: {
        column: 'c.completedAt',
        searchable: true,
        orderable: true,
    },
    cancelledAt: {
        column: 'c.cancelledAt',
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
