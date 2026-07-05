import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const VENDORFINANCIALREPORT_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    vendorId: {
        column: 'c.vendorId',
        searchable: false,
        orderable: true,
    },
    reportType: {
        column: 'c.reportType',
        searchable: true,
        orderable: true,
    },
    year: {
        column: 'c.year',
        searchable: false,
        orderable: true,
    },
    periodFrom: {
        column: 'c.periodFrom',
        searchable: false,
        orderable: true,
    },
    periodTo: {
        column: 'c.periodTo',
        searchable: false,
        orderable: true,
    },
    auditStatus: {
        column: 'c.auditStatus',
        searchable: false,
        orderable: true,
    },
    fileId: {
        column: 'c.fileId',
        searchable: false,
        orderable: true,
    },
    currencyId: {
        column: 'c.currencyId',
        searchable: false,
        orderable: true,
    },
    currentAssets: {
        column: 'c.currentAssets',
        searchable: false,
        orderable: true,
    },
    totalAssets: {
        column: 'c.totalAssets',
        searchable: false,
        orderable: true,
    },
    currentLiabilities: {
        column: 'c.currentLiabilities',
        searchable: false,
        orderable: true,
    },
    totalLiabilities: {
        column: 'c.totalLiabilities',
        searchable: false,
        orderable: true,
    },
    totalRevenue: {
        column: 'c.totalRevenue',
        searchable: false,
        orderable: true,
    },
    netProfitLossAfterTax: {
        column: 'c.netProfitLossAfterTax',
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
