import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateWorkflowHistoryDto {
    @IsOptional()
    workflowTransactionId: number;

    @IsOptional()
    workflowTransactionStepId: number;

    @IsOptional()
    actorId: number;

    @IsOptional()
    action: string;

    @IsOptional()
    fromStepId: number;

    @IsOptional()
    toStepId: number;

    @IsOptional()
    remarks: string;

    @IsOptional()
    actionAt: Date;

}
