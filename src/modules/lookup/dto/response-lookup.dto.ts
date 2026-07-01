import { ApiProperty } from "@nestjs/swagger";

export class LookupResponseDto {
    @ApiProperty()
    value: number | string;

    @ApiProperty()
    label: string;
}
