import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const WORKFLOW_TRANSACTION_STEP_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    workflowTransactionId: {
        column: 'c.workflowTransactionId',
        searchable: true,
        orderable: true,
    },
    workflowStepId: {
        column: 'c.workflowStepId',
        searchable: true,
        orderable: true,
    },
    userId: {
        column: 'c.userId',
        searchable: true,
        orderable: true,
    },
    delegationUserId: {
        column: 'c.delegationUserId',
        searchable: true,
        orderable: true,
    },
    status: {
        column: 'c.status',
        searchable: true,
        orderable: true,
    },
    assignedAt: {
        column: 'c.assignedAt',
        searchable: true,
        orderable: true,
    },
    dueAt: {
        column: 'c.dueAt',
        searchable: true,
        orderable: true,
    },
    actionAt: {
        column: 'c.actionAt',
        searchable: true,
        orderable: true,
    },
    remarks: {
        column: 'c.remarks',
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
