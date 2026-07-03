import { IsEmpty, IsNotEmpty, IsString, Length } from 'class-validator';

export class SignUpDto {

    @IsString()
    @IsNotEmpty()
    vendorName: string;

    @IsString()
    @IsNotEmpty()
    npwp: string;

    @IsString()
    @IsNotEmpty()
    email: string;

}