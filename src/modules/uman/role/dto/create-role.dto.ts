import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateRoleDto {
    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    name: string;
}
