export interface PaginationResult<T> {
    data: T[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPage: number;
        sortBy?: string;
        sortDir?: string;
        search?: string;
    };
}
