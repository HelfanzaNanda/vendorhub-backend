import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const VENDORBUSINESSLICENSETEMP_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    vendorTempId: {
        column: 'c.vendorTempId',
        searchable: false,
        orderable: true,
    },
    vendorBusinessLicenseId: {
        column: 'c.vendorBusinessLicenseId',
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
    fileId: {
        column: 'c.fileId',
        searchable: false,
        orderable: true,
    },
    number: {
        column: 'c.number',
        searchable: true,
        orderable: true,
    },
    industryClassificationIds: {
        column: 'c.industryClassificationIds',
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
