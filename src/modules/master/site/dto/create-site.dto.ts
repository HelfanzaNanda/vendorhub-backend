import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateSiteDto {
    // @IsString()
    @IsNotEmpty()
    area_id: number;

    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    address: string;
}
