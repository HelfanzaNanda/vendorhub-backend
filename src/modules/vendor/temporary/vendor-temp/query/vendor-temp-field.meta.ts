import { FieldMetaMap } from "@common/pagination/field-meta.type";

export const VENDORTEMP_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    vendorId: {
        column: 'c.vendorId',
        searchable: false,
        orderable: true,
    },
    requestNo: {
        column: 'c.requestNo',
        searchable: true,
        orderable: true,
    },
    status: {
        column: 'c.status',
        searchable: false,
        orderable: true,
    },
    submittedAt: {
        column: 'c.submittedAt',
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
