import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CompetencyItemResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    code: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    competencySubCategory: { id: number; name: string } | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
