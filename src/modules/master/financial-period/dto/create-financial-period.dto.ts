import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFinancialPeriodDto {
    @IsString()
    @IsNotEmpty()
    code: string;
    @IsString()
    @IsNotEmpty()
    name: string;
}
