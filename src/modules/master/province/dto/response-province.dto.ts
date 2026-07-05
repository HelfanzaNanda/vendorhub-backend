import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ProvinceResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    country: { id: number; name: string } | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
