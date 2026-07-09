import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateWorkflowDto {
    @IsOptional()
    code: string;

    @IsOptional()
    name: string;

    @IsOptional()
    description: string;

    @IsOptional()
    version: number;

    @IsOptional()
    isActive: boolean;

}
