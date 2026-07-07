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
    nibFileId?: { id: number } | null;

    @ApiProperty({ nullable: true })
    industryClassifications?: any[] | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
