import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class VendorPersonnelResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    vendorId?: number | null;

    @ApiProperty({ nullable: true })
    personnelTypeId?: number | null;

    @ApiProperty({ nullable: true })
    titleId?: number | null;

    @ApiProperty({ nullable: true })
    name?: string | null;

    @ApiProperty({ nullable: true })
    jobTypeId?: number | null;

    @ApiProperty({ nullable: true })
    position?: string | null;

    @ApiProperty({ nullable: true })
    identityTypeId?: number | null;

    @ApiProperty({ nullable: true })
    identityNumber?: string | null;

    @ApiProperty({ nullable: true })
    email?: string | null;

    @ApiProperty({ nullable: true })
    phone?: string | null;

    @ApiProperty({ nullable: true })
    ownershipPercentage?: number | null;

    @ApiProperty({ nullable: true })
    privyId?: string | null;

    @ApiProperty({ nullable: true })
    enterpriseId?: string | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
