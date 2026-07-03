import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class VendorUserTempResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    vendorTempId?: number | null;

    @ApiProperty({ nullable: true })
    vendorUserId?: number | null;

    @ApiProperty({ nullable: true })
    action?: string | null;

    @ApiProperty({ nullable: true })
    reviewStatus?: string | null;

    @ApiProperty({ nullable: true })
    reviewNotes?: string | null;

    @ApiProperty({ nullable: true })
    firstname?: string | null;

    @ApiProperty({ nullable: true })
    lastname?: string | null;

    @ApiProperty({ nullable: true })
    username?: string | null;

    @ApiProperty({ nullable: true })
    email?: string | null;

    @ApiProperty({ nullable: true })
    jobTitle?: string | null;

    @ApiProperty({ nullable: true })
    positionId?: number | null;

    @ApiProperty({ nullable: true })
    effectiveStartDate?: Date | null;

    @ApiProperty({ nullable: true })
    effectiveEndDate?: Date | null;

    @ApiProperty({ nullable: true })
    phone?: string | null;

    @ApiProperty({ nullable: true })
    areaIds?: string | null;

    @ApiProperty({ nullable: true })
    roleIds?: string | null;

    @ApiProperty({ nullable: true })
    fileId?: number | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
