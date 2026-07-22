export enum DocumentTypeCategoryEnum {
    VENDOR = 'VENDOR',
    DOCUMENT = 'DOCUMENT',
    FINANCIAL = 'FINANCIAL',
    BANK = 'BANK',
    COMPANY = 'COMPANY',
    LICENSE = 'LICENSE',
    CUSTOMER = 'CUSTOMER',
    UMAN = 'UMAN',
}

export enum DocumentTypeForVendorDocEnum {
    NPWP = 'NPWP',
    TAXPAYER_STATUS = 'TAXPAYER_STATUS',
    DEED_OF_ESTABLISHMENT = 'DEED_OF_ESTABLISHMENT',
    DEED_OF_AMENDMENT = 'DEED_OF_AMENDMENT',
    ORGANIZATIONAL_STRUCTURE = 'ORGANIZATIONAL_STRUCTURE',
}

export const VendorDocumentPropertyMap: Record<DocumentTypeForVendorDocEnum, string> = {
    [DocumentTypeForVendorDocEnum.NPWP]: 'npwp',
    [DocumentTypeForVendorDocEnum.TAXPAYER_STATUS]: 'taxpayer',
    [DocumentTypeForVendorDocEnum.DEED_OF_ESTABLISHMENT]: 'deedOfEstablishment',
    [DocumentTypeForVendorDocEnum.DEED_OF_AMENDMENT]: 'deedOfAmendment',
    [DocumentTypeForVendorDocEnum.ORGANIZATIONAL_STRUCTURE]: 'organizationStructure',
};