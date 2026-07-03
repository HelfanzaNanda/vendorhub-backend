import { FieldMetaMap } from "@common/pagination/field-meta.type";

export const VENDORDOCUMENT_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    vendorId: {
        column: 'c.vendorId',
        searchable: false,
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
