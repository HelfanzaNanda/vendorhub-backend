import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBankBranchDto {
    @IsString()
    @IsNotEmpty()
    code: string;
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsOptional()
    address?: string;
    @IsInt()
    @IsNotEmpty()
    bankId: number;
}
