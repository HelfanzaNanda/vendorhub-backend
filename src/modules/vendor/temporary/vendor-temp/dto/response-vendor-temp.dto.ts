import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class VendorTempResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    vendorId?: number | null;

    @ApiProperty({ nullable: true })
    requestNo?: string | null;

    @ApiProperty({ nullable: true })
    status?: 'DRAFT' | 'SUBMITTED' | null;

    @ApiProperty({ nullable: true })
    submittedAt?: Date | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
