import { FieldMetaMap } from "@common/pagination/field-meta.type";

export const VENDORAFFILIATIONTEMP_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    vendorTempId: {
        column: 'c.vendorTempId',
        searchable: false,
        orderable: true,
    },
    vendorAffiliationId: {
        column: 'c.vendorAffiliationId',
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
