import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class VendorBankTempResponseDto {
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
    vendorBankId?: number | null;

    @ApiProperty({ nullable: true })
    action?: string | null;

    @ApiProperty({ nullable: true })
    reviewStatus?: string | null;

    @ApiProperty({ nullable: true })
    reviewNotes?: string | null;

    @ApiProperty({ nullable: true })
    bankBranchId?: number | null;

    @ApiProperty()
    bankBranch?: { 
        id: number; 
        name: string;
        bank?: { id: number; name: string; country?: { id: number; name: string } } 
    } | null;

    @ApiProperty({ nullable: true })
    currencyId?: number | null;

    @ApiProperty()
    currency?: { id: number; name: string } | null;

    @ApiProperty({ nullable: true })
    accountName?: string | null;

    @ApiProperty({ nullable: true })
    accountNumber?: string | null;

    @ApiProperty({ nullable: true })
    fileId?: number | null;

    @ApiProperty()
    file?: { id: number; name: string } | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
