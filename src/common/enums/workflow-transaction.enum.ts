export enum WorkflowTransactionStatus {
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
    REJECTED = 'REJECTED',
    REVISED = 'REVISED',
}

export enum WorkflowTransactionStepStatus {
    SUBMITTED = 'SUBMITTED',
    WAITING = 'WAITING',
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
    REVISED = 'REVISED',
}

export enum WorklistFilterType {
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
    REJECTED = 'REJECTED',
    OVER_SLA = 'OVER_SLA',
    NEED_MY_REVIEW = 'NEED_MY_REVIEW',
}