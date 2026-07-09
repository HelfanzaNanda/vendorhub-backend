import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateWorkflowStepAssignmentDto {
    @IsOptional()
    workflowStepId: number;

    @IsOptional()
    areaId: number;

    @IsOptional()
    roleId: number;

    @IsOptional()
    userId: number;

    @IsOptional()
    isActive: boolean;

}
