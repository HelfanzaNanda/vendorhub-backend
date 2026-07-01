import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCityDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsInt()
    @IsNotEmpty()
    provinceId: number;
}
