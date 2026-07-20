import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CheckPrivyDto {
    @IsString()
    @IsNotEmpty()
    privyId: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}