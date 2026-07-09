export class WorkflowTransactionResponseDto {
    id?: number | null;
    workflowId?: number | null;
    vendorTempId?: number | null;
    currentStepId?: number | null;
    status?: string | null;
    requesterId?: number | null;
    submittedAt?: Date | null;
    completedAt?: Date | null;
    cancelledAt?: Date | null;
    audit: {
        createdAt?: Date | null;
        updatedAt?: Date | null;
        createdBy: string | null;
        updatedBy: string | null;
    };
}
