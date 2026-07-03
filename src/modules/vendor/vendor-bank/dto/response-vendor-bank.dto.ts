import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class VendorBankResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    vendorId?: number | null;

    @ApiProperty({ nullable: true })
    bankBranchId?: number | null;

    @ApiProperty({ nullable: true })
    currencyId?: number | null;

    @ApiProperty({ nullable: true })
    accountName?: string | null;

    @ApiProperty({ nullable: true })
    accountNumber?: string | null;

    @ApiProperty({ nullable: true })
    fileId?: number | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
