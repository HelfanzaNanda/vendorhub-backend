import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class VendorDocumentTempResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    vendorTempId?: number | null;

    @ApiProperty({ nullable: true })
    vendorDocumentId?: number | null;

    @ApiProperty({ nullable: true })
    action?: string | null;

    @ApiProperty({ nullable: true })
    reviewStatus?: string | null;

    @ApiProperty({ nullable: true })
    reviewNotes?: string | null;

    @ApiProperty({ nullable: true })
    documentTypeId?: number | null;

    @ApiProperty({ nullable: true })
    documentNumber?: string | null;

    @ApiProperty({ nullable: true })
    address?: string | null;

    @ApiProperty({ nullable: true })
    taxpayerStatus?: string | null;

    @ApiProperty({ nullable: true })
    publishDate?: Date | null;

    @ApiProperty({ nullable: true })
    expiredDate?: Date | null;

    @ApiProperty({ nullable: true })
    fileId?: number | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
