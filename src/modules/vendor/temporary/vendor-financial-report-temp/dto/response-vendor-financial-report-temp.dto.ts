import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { FileResponseDto } from '@common/dto/file-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class VendorFinancialReportTempResponseDto {
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
    vendorFinancialReportId?: number | null;

    @ApiProperty({ nullable: true })
    action?: string | null;

    @ApiProperty({ nullable: true })
    reviewStatus?: string | null;

    @ApiProperty({ nullable: true })
    reviewNotes?: string | null;

    @ApiProperty({ nullable: true })
    reportType?: {
        id: string;
        name: string;
    } | null;

    @ApiProperty({ nullable: true })
    financialPeriod?: {
        id: number;
        name: string;
    } | null;

    @ApiProperty({ nullable: true })
    year?: {
        id : number;
        name : number
    } | null;

    @ApiProperty({ nullable: true })
    periodFrom?: Date | null;

    @ApiProperty({ nullable: true })
    periodTo?: Date | null;

    @ApiProperty({ nullable: true })
    auditStatus?: {
        id : string;
        name : string
    } | null;

    @ApiProperty({ nullable: true })
    fileId?: number | null;

    @ApiProperty({ nullable: true })
    file?: FileResponseDto | null;

    @ApiProperty({ nullable: true })
    currencyId?: number | null;

    @ApiProperty()
    currency?: { id: number; name: string } | null;

    @ApiProperty({ nullable: true })
    currentAssets?: number | null;

    @ApiProperty({ nullable: true })
    totalAssets?: number | null;

    @ApiProperty({ nullable: true })
    currentLiabilities?: number | null;

    @ApiProperty({ nullable: true })
    totalLiabilities?: number | null;

    @ApiProperty({ nullable: true })
    totalRevenue?: number | null;

    @ApiProperty({ nullable: true })
    netProfitLossAfterTax?: number | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
