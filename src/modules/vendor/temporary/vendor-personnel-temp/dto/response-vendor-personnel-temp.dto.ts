import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class VendorPersonnelTempResponseDto {
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
    vendorPicId?: number | null;

    @ApiProperty({ nullable: true })
    action?: string | null;

    @ApiProperty({ nullable: true })
    reviewStatus?: string | null;

    @ApiProperty({ nullable: true })
    reviewNotes?: string | null;

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
