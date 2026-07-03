import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class VendorDocumentResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    vendorId?: number | null;

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
