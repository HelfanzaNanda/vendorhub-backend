import { ApiProperty } from "@nestjs/swagger";

export class FileResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    fileName: string;

    @ApiProperty()
    fileSize: number;

    @ApiProperty()
    mimeType?: string;

    @ApiProperty()
    path?: string;

    @ApiProperty()
    url?: string;
}