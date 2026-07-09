export class WorkflowTransactionStepResponseDto {
    id?: number | null;
    workflowTransactionId?: number | null;
    workflowStepId?: number | null;
    userId?: number | null;
    delegationUserId?: number | null;
    status?: string | null;
    assignedAt?: Date | null;
    dueAt?: Date | null;
    actionAt?: Date | null;
    remarks?: string | null;
    audit: {
        createdAt?: Date | null;
        updatedAt?: Date | null;
        createdBy: string | null;
        updatedBy: string | null;
    };
}
