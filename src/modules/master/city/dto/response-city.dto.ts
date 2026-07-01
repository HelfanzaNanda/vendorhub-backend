import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CityResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    province: { id: number; name: string } | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
