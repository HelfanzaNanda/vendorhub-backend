import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDocumentTypeDto {
    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    name: string;
}
