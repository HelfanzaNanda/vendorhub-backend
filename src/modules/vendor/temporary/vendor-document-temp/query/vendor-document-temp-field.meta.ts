import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const VENDORDOCUMENTTEMP_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    vendorTempId: {
        column: 'c.vendorTempId',
        searchable: false,
        orderable: true,
    },
    vendorDocumentId: {
        column: 'c.vendorDocumentId',
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
    documentTypeId: {
        column: 'c.documentTypeId',
        searchable: false,
        orderable: true,
    },
    documentNumber: {
        column: 'c.documentNumber',
        searchable: true,
        orderable: true,
    },
    address: {
        column: 'c.address',
        searchable: true,
        orderable: true,
    },
    taxpayerStatus: {
        column: 'c.taxpayerStatus',
        searchable: true,
        orderable: true,
    },
    publishDate: {
        column: 'c.publishDate',
        searchable: false,
        orderable: true,
    },
    expiredDate: {
        column: 'c.expiredDate',
        searchable: false,
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
