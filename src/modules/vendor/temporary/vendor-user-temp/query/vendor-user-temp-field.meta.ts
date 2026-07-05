import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const VENDORUSERTEMP_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    vendorTempId: {
        column: 'c.vendorTempId',
        searchable: false,
        orderable: true,
    },
    vendorUserId: {
        column: 'c.vendorUserId',
        searchable: false,
        orderable: true,
    },
    action: {
        column: 'c.action',
        searchable: true,
        orderable: true,
    },
    reviewStatus: {
        column: 'c.reviewStatus',
        searchable: true,
        orderable: true,
    },
    reviewNotes: {
        column: 'c.reviewNotes',
        searchable: true,
        orderable: true,
    },
    firstname: {
        column: 'c.firstname',
        searchable: true,
        orderable: true,
    },
    lastname: {
        column: 'c.lastname',
        searchable: true,
        orderable: true,
    },
    username: {
        column: 'c.username',
        searchable: true,
        orderable: true,
    },
    email: {
        column: 'c.email',
        searchable: true,
        orderable: true,
    },
    jobTitle: {
        column: 'c.jobTitle',
        searchable: true,
        orderable: true,
    },
    positionId: {
        column: 'c.positionId',
        searchable: false,
        orderable: true,
    },
    effectiveStartDate: {
        column: 'c.effectiveStartDate',
        searchable: false,
        orderable: true,
    },
    effectiveEndDate: {
        column: 'c.effectiveEndDate',
        searchable: false,
        orderable: true,
    },
    phone: {
        column: 'c.phone',
        searchable: true,
        orderable: true,
    },
    areaIds: {
        column: 'c.areaIds',
        searchable: true,
        orderable: true,
    },
    roleIds: {
        column: 'c.roleIds',
        searchable: true,
        orderable: true,
    },
    fileId: {
        column: 'c.fileId',
        searchable: false,
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
