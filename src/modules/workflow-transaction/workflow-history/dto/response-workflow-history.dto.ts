export class WorkflowHistoryResponseDto {
    id?: number | null;
    workflowTransactionId?: number | null;
    workflowTransactionStepId?: number | null;
    actorId?: number | null;
    action?: string | null;
    fromStepId?: number | null;
    toStepId?: number | null;
    remarks?: string | null;
    actionAt?: Date | null;
    audit: {
        createdAt?: Date | null;
        updatedAt?: Date | null;
        createdBy: string | null;
        updatedBy: string | null;
    };
}
