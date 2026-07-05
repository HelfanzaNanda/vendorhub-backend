import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class FileResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    ownerId?: number;

    @ApiProperty()
    referenceId?: number;

    @ApiProperty()
    documentTypeId?: number;

    @ApiProperty()
    fileName: string;

    @ApiProperty()
    originalFileName: string;

    @ApiProperty()
    extension: string;

    @ApiProperty()
    mimeType: string;

    @ApiProperty()
    fileSize: number;

    @ApiProperty()
    storagePath: string;

    @ApiProperty()
    storageDisk: string;

    @ApiProperty()
    version?: string;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
