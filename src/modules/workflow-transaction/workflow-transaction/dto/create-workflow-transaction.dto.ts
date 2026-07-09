import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateWorkflowTransactionDto {
    @IsOptional()
    workflowId: number;

    @IsOptional()
    vendorTempId: number;

    @IsOptional()
    currentStepId: number;

    @IsOptional()
    status: string;

    @IsOptional()
    requesterId: number;

    @IsOptional()
    submittedAt: Date;

    @IsOptional()
    completedAt: Date;

    @IsOptional()
    cancelledAt: Date;

}
