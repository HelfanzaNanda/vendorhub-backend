import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBusinessEntityTypeDto {
    @IsString()
    @IsNotEmpty()
    code: string;
    @IsString()
    @IsNotEmpty()
    name: string;
}
