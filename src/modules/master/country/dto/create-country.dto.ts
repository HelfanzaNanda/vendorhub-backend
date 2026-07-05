import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { IsNull } from 'typeorm';

export class CreateCountryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    iso2Code: string;

    @IsEmpty()
    iso3Code: string;

    @IsString()
    @IsNotEmpty()
    phoneCode: string;
}
