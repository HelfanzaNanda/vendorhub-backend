import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const WORKFLOW_STEP_ASSIGNMENT_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    workflowStepId: {
        column: 'c.workflowStepId',
        searchable: true,
        orderable: true,
    },
    areaId: {
        column: 'c.areaId',
        searchable: true,
        orderable: true,
    },
    roleId: {
        column: 'c.roleId',
        searchable: true,
        orderable: true,
    },
    userId: {
        column: 'c.userId',
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
