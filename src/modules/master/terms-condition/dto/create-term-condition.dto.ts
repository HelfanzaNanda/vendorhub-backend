import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTermsConditionDto {
    @IsString()
    @IsNotEmpty()
    version: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsBoolean()
    @IsNotEmpty()
    status: boolean;
}
