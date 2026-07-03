import { FieldMetaMap } from "@common/pagination/field-meta.type";

export const VENDORPERSONNEL_FIELDS: FieldMetaMap = {
    id: {
        column: 'c.id',
        orderable: true,
    },
    vendorId: {
        column: 'c.vendorId',
        searchable: false,
        orderable: true,
    },
    personnelTypeId: {
        column: 'c.personnelTypeId',
        searchable: false,
        orderable: true,
    },
    titleId: {
        column: 'c.titleId',
        searchable: false,
        orderable: true,
    },
    name: {
        column: 'c.name',
        searchable: true,
        orderable: true,
    },
    jobTypeId: {
        column: 'c.jobTypeId',
        searchable: false,
        orderable: true,
    },
    position: {
        column: 'c.position',
        searchable: true,
        orderable: true,
    },
    identityTypeId: {
        column: 'c.identityTypeId',
        searchable: false,
        orderable: true,
    },
    identityNumber: {
        column: 'c.identityNumber',
        searchable: true,
        orderable: true,
    },
    email: {
        column: 'c.email',
        searchable: true,
        orderable: true,
    },
    phone: {
        column: 'c.phone',
        searchable: true,
        orderable: true,
    },
    ownershipPercentage: {
        column: 'c.ownershipPercentage',
        searchable: false,
        orderable: true,
    },
    privyId: {
        column: 'c.privyId',
        searchable: true,
        orderable: true,
    },
    enterpriseId: {
        column: 'c.enterpriseId',
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
