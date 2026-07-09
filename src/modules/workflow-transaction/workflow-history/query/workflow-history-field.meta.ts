import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const WORKFLOW_HISTORY_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    workflowTransactionId: {
        column: 'c.workflowTransactionId',
        searchable: true,
        orderable: true,
    },
    workflowTransactionStepId: {
        column: 'c.workflowTransactionStepId',
        searchable: true,
        orderable: true,
    },
    actorId: {
        column: 'c.actorId',
        searchable: true,
        orderable: true,
    },
    action: {
        column: 'c.action',
        searchable: true,
        orderable: true,
    },
    fromStepId: {
        column: 'c.fromStepId',
        searchable: true,
        orderable: true,
    },
    toStepId: {
        column: 'c.toStepId',
        searchable: true,
        orderable: true,
    },
    remarks: {
        column: 'c.remarks',
        searchable: true,
        orderable: true,
    },
    actionAt: {
        column: 'c.actionAt',
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
