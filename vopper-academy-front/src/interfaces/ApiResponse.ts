export interface ApiResponse<T> {
    data: T;
    success: boolean,
    errorMessage: string | null,
    statusCode: number
}

export interface ApiResponseList<T> {
    data: T[];
    success: boolean,
    errorMessage: string | null,
    statusCode: number
}