import { FieldMetaMap } from "@common/pagination/field-meta.type";

export const VENDORBANKTEMP_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    vendorTempId: {
        column: 'c.vendorTempId',
        searchable: false,
        orderable: true,
    },
    vendorBankId: {
        column: 'c.vendorBankId',
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
    bankBranchId: {
        column: 'c.bankBranchId',
        searchable: false,
        orderable: true,
    },
    currencyId: {
        column: 'c.currencyId',
        searchable: false,
        orderable: true,
    },
    accountName: {
        column: 'c.accountName',
        searchable: true,
        orderable: true,
    },
    accountNumber: {
        column: 'c.accountNumber',
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
