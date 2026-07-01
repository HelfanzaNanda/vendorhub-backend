import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateIdentityTypeDto {
    @IsString()
    @IsNotEmpty()
    code: string;
    @IsString()
    @IsNotEmpty()
    name: string;
}
