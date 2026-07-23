import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { FileResponseDto } from '@common/dto/file-response.dto';
import { PersonnelDocumentEnum } from '@common/enums/personnel-type.enum';
import { ApiProperty } from '@nestjs/swagger';

export class VendorPersonnelDocumentTempResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    action?: string | null;

    // @ApiProperty({ nullable: true })
    // reviewStatus?: string | null;

    // @ApiProperty({ nullable: true })
    // reviewNotes?: string | null;

    @ApiProperty({ nullable: true })
    type?: {
        id?: PersonnelDocumentEnum | null,
        name?: PersonnelDocumentEnum | null,
    } | null;

    @ApiProperty({ nullable: true })
    validFrom?: Date | null;

    @ApiProperty({ nullable: true })
    validTo?: Date | null;
}
