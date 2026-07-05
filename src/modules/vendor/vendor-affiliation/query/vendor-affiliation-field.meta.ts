import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const VENDORAFFILIATION_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    vendorId: {
        column: 'c.vendorId',
        searchable: false,
        orderable: true,
    },
    affiliateTypeId: {
        column: 'c.affiliateTypeId',
        searchable: false,
        orderable: true,
    },
    companyName: {
        column: 'c.companyName',
        searchable: true,
        orderable: true,
    },
    npwp: {
        column: 'c.npwp',
        searchable: true,
        orderable: true,
    },
    businessField: {
        column: 'c.businessField',
        searchable: true,
        orderable: true,
    },
    companyBusinessEntityTypeId: {
        column: 'c.companyBusinessEntityTypeId',
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
