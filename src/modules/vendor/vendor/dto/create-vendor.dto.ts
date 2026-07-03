import { IsOptional, IsString, IsEnum, IsInt } from "class-validator";

export class CreateVendorDto {
    @IsString()
    @IsOptional()
    vendorCode?: string;

    @IsEnum(['CANDIDATE', 'VENDOR'])
    @IsOptional()
    vendorStage?: 'CANDIDATE' | 'VENDOR';

    @IsEnum(['LOCAL', 'FOREIGN', 'INDIVIDUAL'])
    @IsOptional()
    vendorType?: 'LOCAL' | 'FOREIGN' | 'INDIVIDUAL';

    @IsInt()
    @IsOptional()
    vendorStatusId?: number;
}
