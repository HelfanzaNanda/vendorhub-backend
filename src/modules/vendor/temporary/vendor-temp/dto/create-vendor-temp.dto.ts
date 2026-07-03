import { IsOptional, IsInt, IsString, IsEnum } from "class-validator";

export class CreateVendorTempDto {
    @IsInt()
    @IsOptional()
    vendorId?: number;

    @IsString()
    @IsOptional()
    requestNo?: string;

    @IsEnum(['DRAFT', 'SUBMITTED'])
    @IsOptional()
    status?: 'DRAFT' | 'SUBMITTED';

    @IsOptional()
    submittedAt?: Date;
}
