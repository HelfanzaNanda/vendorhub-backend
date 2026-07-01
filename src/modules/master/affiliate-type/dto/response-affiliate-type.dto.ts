import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class AffiliateTypeResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
