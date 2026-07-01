import { AuditResponseDto } from "@common/dto/audit-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class VendorCategoryItemResponseDto {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    code: string;

    @ApiProperty()
    name: string;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
