import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const VENDORBUSINESSLICENSEITEM_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    vendorBusinessLicenseId: {
        column: 'c.vendorBusinessLicenseId',
        searchable: false,
        orderable: true,
    },
    industryClassificationId: {
        column: 'c.industryClassificationId',
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
