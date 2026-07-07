import { DataSource } from '@common/enums';
import { CreateVendorCompetencyTempDto } from './create-vendor-competency-temp.dto';
import { IsEnum, IsOptional } from 'class-validator';

export class UpdateVendorCompetencyTempDto extends CreateVendorCompetencyTempDto {
    @IsEnum(DataSource)
    @IsOptional()
    source?: DataSource;
}
