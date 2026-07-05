import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class VendorBusinessLicenseTempResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    vendorTempId?: number | null;

    @ApiProperty({ nullable: true })
    vendorBusinessLicenseId?: number | null;

    @ApiProperty({ nullable: true })
    action?: string | null;

    @ApiProperty({ nullable: true })
    reviewStatus?: string | null;

    @ApiProperty({ nullable: true })
    reviewNotes?: string | null;

    @ApiProperty({ nullable: true })
    fileId?: number | null;

    @ApiProperty({ nullable: true })
    file?: {
        id: number;
        originalName: string;
        filename: string;
        mimeType: string;
        size: number;
        url: string;
    } | null;

    @ApiProperty({ nullable: true })
    number?: string | null;

    @ApiProperty({ nullable: true })
    industryClassificationIds?: string | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
