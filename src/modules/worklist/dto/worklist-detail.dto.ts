export interface WorklistGenericResponse<T = any> {
    id: number | string;
    action: 'CREATE' | 'UPDATE' | 'DELETE' | 'NO_ACTION';
    reviewStatus: string | null;
    reviewRemark: string | null;
    data: T | null;
    originalData: T | null;
    permissions?: {
        showReviewSection: boolean;
    };
}


