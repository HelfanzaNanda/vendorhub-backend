import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateWorkflowTransactionStepDto {
    @IsOptional()
    workflowTransactionId: number;

    @IsOptional()
    workflowStepId: number;

    @IsOptional()
    userId: number;

    @IsOptional()
    delegationUserId: number;

    @IsOptional()
    status: string;

    @IsOptional()
    assignedAt: Date;

    @IsOptional()
    dueAt: Date;

    @IsOptional()
    actionAt: Date;

    @IsOptional()
    remarks: string;

}
