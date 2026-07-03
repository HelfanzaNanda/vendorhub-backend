import { FieldMetaMap } from "@common/pagination/field-meta.type";

export const VENDOR_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    vendorCode: {
        column: 'c.vendorCode',
        searchable: true,
        orderable: true,
    },
    vendorStage: {
        column: 'c.vendorStage',
        searchable: false,
        orderable: true,
    },
    vendorType: {
        column: 'c.vendorType',
        searchable: false,
        orderable: true,
    },
    vendorStatusId: {
        column: 'c.vendorStatusId',
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
