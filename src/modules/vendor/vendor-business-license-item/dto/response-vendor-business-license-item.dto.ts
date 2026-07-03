import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class VendorBusinessLicenseItemResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    vendorBusinessLicenseId?: number | null;

    @ApiProperty({ nullable: true })
    industryClassificationId?: number | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
