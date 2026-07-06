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

    @ApiProperty()
    affiliateTypeId: number | null;

    @ApiProperty()
    affiliateType: { id: number; name: string } | null;

    @ApiProperty()
    companyName: string | null;

    @ApiProperty()
    npwp: string | null;

    @ApiProperty()
    businessField: string | null;

    @ApiProperty()
    companyBusinessEntityTypeId: number | null;

    @ApiProperty()
    companyBusinessEntityType: { id: number; name: string } | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
