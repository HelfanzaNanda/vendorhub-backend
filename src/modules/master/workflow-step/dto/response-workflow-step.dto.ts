export class WorkflowStepResponseDto {
    id?: number | null;
    workflowId?: number | null;
    sequence?: number | null;
    code?: string | null;
    name?: string | null;
    assignmentType?: string | null;
    canApprove?: boolean | null;
    canReject?: boolean | null;
    canRevise?: boolean | null;
    slaDuration?: number | null;
    slaUnit?: string | null;
    useWorkingCalendar?: boolean | null;
    isStart?: boolean | null;
    isEnd?: boolean | null;
    audit: {
        createdAt?: Date | null;
        updatedAt?: Date | null;
        createdBy: string | null;
        updatedBy: string | null;
    };
}
