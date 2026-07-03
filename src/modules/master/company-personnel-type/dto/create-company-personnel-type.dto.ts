import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyPersonnelTypeDto {
    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    name: string;
}
