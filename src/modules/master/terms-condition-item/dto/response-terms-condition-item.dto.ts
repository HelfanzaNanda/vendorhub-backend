import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class TermsConditionItemResponseDto {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    chapter: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    sortOrder: number;

    @ApiProperty()
    approvalMode: string;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
