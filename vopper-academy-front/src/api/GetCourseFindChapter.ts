import { ApiResponse } from "@interfaces/ApiResponse";
import type { Chapter } from "../types/Chapter";
import { notFound } from "next/navigation";  // Importa notFound

const url = process.env.NEXT_PUBLIC_API_URL;

const GET = async (idCourse: string, idChapter: string): Promise<ApiResponse<Chapter>> => {
    if (!url) {
        throw new Error("Environment variable NEXT_PUBLIC_API_URL is not set.");
    }

    if (!idCourse || !idChapter) {
        throw new Error("Both idCourse and idChapter are required.");
    }

    const URL = `${url}/chapters/${idCourse}/${idChapter}`;

    try {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            // Manejar específicamente el error 404
            if (response.status === 404) {
                return {
                    success: false,
                    data: null,
                    errorMessage: "Chapter not found",
                    statusCode: 404,
                };
            }

            // Manejar otros errores
            const errorMessage = await response.text();
            throw new Error(
                `Failed to fetch chapter. Status: ${response.status} - ${response.statusText}. Details: ${errorMessage}`
            );
        }

        const apiResponse: ApiResponse<Chapter> = await response.json();

        if (!apiResponse.success || !apiResponse.data) {
            throw new Error(
                `API responded with success: false. Message: ${apiResponse.errorMessage || "No message provided"}`
            );
        }

        return apiResponse;
    } catch (error) {
        throw new Error(`Error in GetCourseFindChapter: ${error instanceof Error ? error.message : String(error)}`);
    }
};


export { GET };
