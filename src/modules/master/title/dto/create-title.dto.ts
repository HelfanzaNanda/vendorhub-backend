import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTitleDto {
    @IsString()
    @IsNotEmpty()
    code: string;
    @IsString()
    @IsNotEmpty()
    name: string;
}
