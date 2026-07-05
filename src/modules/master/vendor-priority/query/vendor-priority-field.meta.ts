import { FieldMetaMap } from '@common/pagination/field-meta.type';

export const VENDOR_PRIORITY_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    name: {
        column: 'c.name',
        searchable: true,
        orderable: true,
    },
    iso2Code: {
        column: 'c.iso2Code',
        searchable: true,
        orderable: true,
    },
    iso3Code: {
        column: 'c.iso3Code',
        searchable: true,
        orderable: true,
    },
    phoneCode: {
        column: 'c.phoneCode',
        searchable: true,
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
