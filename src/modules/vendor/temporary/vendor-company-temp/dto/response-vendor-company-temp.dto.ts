import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class VendorCompanyTempResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    vendorTempId?: number | null;

    @ApiProperty({ nullable: true })
    vendorCompanyId?: number | null;

    @ApiProperty({ nullable: true })
    action?: string | null;

    @ApiProperty({ nullable: true })
    reviewStatus?: string | null;

    @ApiProperty({ nullable: true })
    reviewNotes?: string | null;

    @ApiProperty({ nullable: true })
    companyName?: string | null;

    @ApiProperty({ nullable: true })
    siteId?: number | null;

    @ApiProperty({ nullable: true })
    businessTypeId?: number | null;

    @ApiProperty({ nullable: true })
    staffCount?: number | null;

    @ApiProperty({ nullable: true })
    address?: string | null;

    @ApiProperty({ nullable: true })
    countryId?: number | null;

    @ApiProperty({ nullable: true })
    provinceId?: number | null;

    @ApiProperty({ nullable: true })
    cityId?: number | null;

    @ApiProperty({ nullable: true })
    mapUrl?: string | null;

    @ApiProperty({ nullable: true })
    postalCode?: string | null;

    @ApiProperty({ nullable: true })
    website?: string | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
