import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class VendorAffiliationResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    vendorId?: number | null;

    @ApiProperty({ nullable: true })
    affiliateTypeId?: number | null;

    @ApiProperty({ nullable: true })
    companyName?: string | null;

    @ApiProperty({ nullable: true })
    npwp?: string | null;

    @ApiProperty({ nullable: true })
    businessField?: string | null;

    @ApiProperty({ nullable: true })
    companyBusinessEntityTypeId?: number | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
