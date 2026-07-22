export interface VendorDocumentItemResponseDto {
    id: number;

    vendorTempId: number | null;
    vendorDocumentId: number | null;

    action: string | null;
    reviewStatus: string | null;
    reviewNotes: string | null;

    documentTypeId: number | null;

    documentNumber: string | null;
    address: string | null;

    taxpayerStatus: boolean | null;

    publishedDate: Date | null;
    expiredDate: Date | null;

    fileId: number | null;

    file: {
        id: number;
        originalName: string;
        filename: string;
        mimeType: string;
        size: number;
        url: string;
    } | null;

    audit: {
        createdAt: Date;
        updatedAt: Date;
        createdBy: string | null;
        updatedBy: string | null;
    };
}

export interface VendorDocumentTempResponseDto {
    npwp?: VendorDocumentItemResponseDto;
    taxpayer?: VendorDocumentItemResponseDto;
    deedOfEstablishment?: VendorDocumentItemResponseDto;
    deedOfAmendment?: VendorDocumentItemResponseDto;
    organizationStructure?: VendorDocumentItemResponseDto;
}