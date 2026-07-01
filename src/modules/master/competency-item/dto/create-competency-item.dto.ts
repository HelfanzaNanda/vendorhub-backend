import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCompetencyItemDto {
    @IsString()
    @IsNotEmpty()
    code: string;
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsOptional()
    description?: string;
    @IsInt()
    @IsNotEmpty()
    competencySubCategoryId: number;
}
