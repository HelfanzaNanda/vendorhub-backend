import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class VendorAffiliationTempResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    masterId?: number | null;

    @ApiProperty({ nullable: true })
    tempId?: number | null;

    @ApiProperty({ nullable: true })
    source?: string;

    @ApiProperty({ nullable: true })
    vendorTempId?: number | null;

    @ApiProperty({ nullable: true })
    vendorAffiliationId?: number | null;

    @ApiProperty({ nullable: true })
    action?: string | null;

    @ApiProperty({ nullable: true })
    reviewStatus?: string | null;

    @ApiProperty({ nullable: true })
    reviewNotes?: string | null;

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
