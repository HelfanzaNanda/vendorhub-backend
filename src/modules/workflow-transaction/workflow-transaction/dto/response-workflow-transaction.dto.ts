export class WorkflowTransactionResponseDto {
    id?: number | null;
    workflowId?: number | null;
    vendorTempId?: number | null;
    currentTransactionStepId: number | null;
    status?: string | null;
    requesterId?: number | null;
    submittedAt?: Date | null;
    completedAt?: Date | null;
    rejectedAt?: Date | null;
    revisedAt?: Date | null;
    audit: {
        createdAt?: Date | null;
        updatedAt?: Date | null;
        createdBy: string | null;
        updatedBy: string | null;
    };
}
