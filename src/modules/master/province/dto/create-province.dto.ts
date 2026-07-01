import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProvinceDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsInt()
    @IsNotEmpty()
    countryId: number;
}
