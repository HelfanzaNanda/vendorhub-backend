import { FieldMetaMap } from "@common/pagination/field-meta.type";

export const VENDORCOMPANY_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    vendorId: {
        column: 'c.vendorId',
        searchable: false,
        orderable: true,
    },
    companyName: {
        column: 'c.companyName',
        searchable: true,
        orderable: true,
    },
    siteId: {
        column: 'c.siteId',
        searchable: false,
        orderable: true,
    },
    businessTypeId: {
        column: 'c.businessTypeId',
        searchable: false,
        orderable: true,
    },
    staffCount: {
        column: 'c.staffCount',
        searchable: false,
        orderable: true,
    },
    address: {
        column: 'c.address',
        searchable: true,
        orderable: true,
    },
    countryId: {
        column: 'c.countryId',
        searchable: false,
        orderable: true,
    },
    provinceId: {
        column: 'c.provinceId',
        searchable: false,
        orderable: true,
    },
    cityId: {
        column: 'c.cityId',
        searchable: false,
        orderable: true,
    },
    mapUrl: {
        column: 'c.mapUrl',
        searchable: true,
        orderable: true,
    },
    postalCode: {
        column: 'c.postalCode',
        searchable: true,
        orderable: true,
    },
    website: {
        column: 'c.website',
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
