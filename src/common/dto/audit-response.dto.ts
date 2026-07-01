import { ApiProperty } from "@nestjs/swagger";

export class AuditResponseDto {
    @ApiProperty({ example: '2026-02-01T10:00:00Z' })
    createdAt: Date;

    @ApiProperty({ example: '2026-02-02T09:00:00Z' })
    updatedAt: Date;
    
    @ApiProperty({
        example: 'admin',
        nullable: true,
    })
    createdBy: string | null;

    @ApiProperty({
        example: 'superadmin',
        nullable: true,
    })
    updatedBy: string | null;
}
