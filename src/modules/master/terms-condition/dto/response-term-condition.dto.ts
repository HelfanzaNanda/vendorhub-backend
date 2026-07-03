import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class TermsConditionResponseDto {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    title: string;

    @ApiProperty()
    version: string;

    @ApiProperty()
    status: boolean;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
