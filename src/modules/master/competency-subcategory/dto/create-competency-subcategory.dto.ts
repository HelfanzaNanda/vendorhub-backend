import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCompetencySubCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsInt()
    @IsNotEmpty()
    competencyCategoryId: number;
}
