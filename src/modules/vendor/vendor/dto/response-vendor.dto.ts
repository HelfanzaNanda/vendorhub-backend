import { AuditResponseDto } from '@common/dto/audit-response.dto';
import { VendorStageEnum, VendorStatusEnum, VendorTypeEnum } from '@common/enums/vendor.enum';
import { ApiProperty } from '@nestjs/swagger';

export class VendorResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ nullable: true })
    vendorCode?: string | null;

    @ApiProperty({ nullable: true })
    vendorStage?: VendorStageEnum | null;

    @ApiProperty({ nullable: true })
    vendorType?: VendorTypeEnum | null;

    @ApiProperty({ nullable: true })
    status?: VendorStatusEnum | null;

    @ApiProperty({ type: () => AuditResponseDto })
    audit: AuditResponseDto;
}
