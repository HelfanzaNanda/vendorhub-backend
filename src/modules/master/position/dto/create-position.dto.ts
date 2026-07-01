import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePositionDto {
    @IsString()
    @IsNotEmpty()
    code: string;
    @IsString()
    @IsNotEmpty()
    name: string;
}
