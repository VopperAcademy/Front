export interface ApiResponse<T> {
    data: T ;
    success: boolean,
    errorMessage: string,
    statusCode: number
}

export interface ApiResponseList<T>{
    data: T[] ;
    success: boolean,
    errorMessage: string,
    statusCode: number
}