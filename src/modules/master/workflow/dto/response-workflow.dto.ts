export class WorkflowResponseDto {
    id?: number | null;
    code?: string | null;
    name?: string | null;
    description?: string | null;
    version?: number | null;
    isActive?: boolean | null;
    audit: {
        createdAt?: Date | null;
        updatedAt?: Date | null;
        createdBy: string | null;
        updatedBy: string | null;
    };
}
