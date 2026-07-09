export class WorkflowStepAssignmentResponseDto {
    id?: number | null;
    workflowStepId?: number | null;
    areaId?: number | null;
    roleId?: number | null;
    userId?: number | null;
    isActive?: boolean | null;
    audit: {
        createdAt?: Date | null;
        updatedAt?: Date | null;
        createdBy: string | null;
        updatedBy: string | null;
    };
}
