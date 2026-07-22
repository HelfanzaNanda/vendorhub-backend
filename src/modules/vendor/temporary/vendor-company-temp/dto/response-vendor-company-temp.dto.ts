import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { ApiProperty } from '@nestjs/swagger';

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
    site?: RelationResponseDto | null;

    @ApiProperty({ nullable: true })
    businessType?: RelationResponseDto | null;

    @ApiProperty({ nullable: true })
    staffCount?: number | null;

    @ApiProperty({ nullable: true })
    address?: string | null;

    @ApiProperty({ nullable: true })
    country?: RelationResponseDto | null;

    @ApiProperty({ nullable: true })
    province?: RelationResponseDto | null;

    @ApiProperty({ nullable: true })
    city?: RelationResponseDto | null;

    @ApiProperty({ nullable: true })
    mapUrl?: string | null;

    @ApiProperty({ nullable: true })
    postalCode?: string | null;

    @ApiProperty({ nullable: true })
    website?: string | null;
}
