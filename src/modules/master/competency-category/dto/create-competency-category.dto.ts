import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCompetencyCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}
