
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateVendorCategoryDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    iso2Code: string;

    @IsString()
    @IsNotEmpty()
    iso3Code: string;

    @IsString()
    @IsNotEmpty()
    phoneCode: string;
}