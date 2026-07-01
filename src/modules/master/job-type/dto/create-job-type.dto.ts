import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateJobTypeDto {
    @IsString()
    @IsNotEmpty()
    code: string;
    @IsString()
    @IsNotEmpty()
    name: string;
}
