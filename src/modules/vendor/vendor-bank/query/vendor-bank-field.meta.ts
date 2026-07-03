import { FieldMetaMap } from "@common/pagination/field-meta.type";

export const VENDORBANK_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    vendorId: {
        column: 'c.vendorId',
        searchable: false,
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
