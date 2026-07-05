import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class VendorBusinessLicenseResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    vendorId?: number | null;

    @ApiProperty({ nullable: true })
    fileId?: number | null;

    @ApiProperty({ nullable: true })
    number?: string | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
