
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateBankDto {
    
    @IsString()
    @IsNotEmpty()
    code: string;

    
    @IsString()
    @IsNotEmpty()
    name: string;

}