
import { IsEmpty, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateAffiliateTypeDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsEmpty()
    description: string;
}