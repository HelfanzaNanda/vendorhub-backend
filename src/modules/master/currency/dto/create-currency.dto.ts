import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCurrencyDto {
    @IsString()
    @IsNotEmpty()
    code: string;
    @IsString()
    @IsNotEmpty()
    name: string;
}
