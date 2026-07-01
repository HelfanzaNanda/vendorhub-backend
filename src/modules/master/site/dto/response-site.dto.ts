import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class SiteResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    area: string;

    @ApiProperty()
    code: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    city: string;

    @ApiProperty()
    address: string;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
