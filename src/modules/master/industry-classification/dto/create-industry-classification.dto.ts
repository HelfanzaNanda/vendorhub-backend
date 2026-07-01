import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateIndustryClassificationDto {
    @IsString()
    @IsNotEmpty()
    number: string;
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsOptional()
    description?: string;
}
