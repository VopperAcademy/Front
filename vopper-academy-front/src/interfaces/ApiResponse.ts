export interface ApiResponse<T> {
    data: T | null;
    success: boolean,
    errorMessage: string | null,
    statusCode: number
}

export interface ApiResponseList<T> {
    data: T[] | null;
    success: boolean,
    errorMessage: string | null,
    statusCode: number
}