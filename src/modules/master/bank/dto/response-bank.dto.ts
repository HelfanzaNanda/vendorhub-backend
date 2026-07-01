import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class BankResponseDto {
    @ApiProperty()
    id: number;


    @ApiProperty()
    country: string;
    
    @ApiProperty()
    code: string;

    @ApiProperty()
    name: string;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
