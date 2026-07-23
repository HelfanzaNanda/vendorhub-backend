import { ApiProperty } from "@nestjs/swagger";

export class FileResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    originalName: string;

    @ApiProperty()
    filename: string;

    @ApiProperty()
    size: number;

    @ApiProperty()
    mimeType?: string;

    @ApiProperty()
    path?: string;

    @ApiProperty()
    url?: string;

    @ApiProperty()
    uuid?: string;
}