import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CountryResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    iso2Code: string;

    @ApiProperty()
    iso3Code: string;

    @ApiProperty()
    phoneCode: string;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
