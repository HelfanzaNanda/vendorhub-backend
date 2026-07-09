import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateWorkflowStepDto {
    @IsOptional()
    workflowId: number;

    @IsOptional()
    sequence: number;

    @IsOptional()
    code: string;

    @IsOptional()
    name: string;

    @IsOptional()
    assignmentType: string;

    @IsOptional()
    canApprove: boolean;

    @IsOptional()
    canReject: boolean;

    @IsOptional()
    canRevise: boolean;

    @IsOptional()
    slaDuration: number;

    @IsOptional()
    slaUnit: string;

    @IsOptional()
    useWorkingCalendar: boolean;

    @IsOptional()
    isStart: boolean;

    @IsOptional()
    isEnd: boolean;

}
