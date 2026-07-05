import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class IndustryClassificationResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    number: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
