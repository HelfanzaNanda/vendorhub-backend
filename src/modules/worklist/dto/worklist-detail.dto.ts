export interface WorklistGenericResponse<T = any> {
    id: number | string;
    action: 'CREATE' | 'UPDATE' | 'DELETE' | 'NO_CHANGE';
    reviewStatus: string | null;
    reviewRemark: string | null;
    data: T | null;
    originalData: T | null;
}