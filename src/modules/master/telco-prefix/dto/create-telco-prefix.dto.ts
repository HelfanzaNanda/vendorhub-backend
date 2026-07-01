import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTelcoPrefixDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsOptional()
    description?: string;
}
