import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateAreaDto {
    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    name: string;
}
