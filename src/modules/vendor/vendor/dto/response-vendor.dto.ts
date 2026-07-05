import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class VendorResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    vendorCode?: string | null;

    @ApiProperty({ nullable: true })
    vendorStage?: 'CANDIDATE' | 'VENDOR' | null;

    @ApiProperty({ nullable: true })
    vendorType?: 'LOCAL' | 'FOREIGN' | 'INDIVIDUAL' | null;

    @ApiProperty({ nullable: true })
    vendorStatusId?: number | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
