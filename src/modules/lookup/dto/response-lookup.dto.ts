import { ApiProperty } from '@nestjs/swagger';

export class LookupResponseDto {
    @ApiProperty()
    id: number | string;

    @ApiProperty()
    name: string;
}
