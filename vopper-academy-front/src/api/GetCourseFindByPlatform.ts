import { ApiResponse } from "@/interfaces/ApiResponse";
import { platformsAndCourse } from "@/types/Platforms";

const url = process.env.NEXT_PUBLIC_API_URL;

const GET = async (id: string): Promise<ApiResponse<platformsAndCourse>> => {

    if (!url) {
        throw new Error("API URL is not defined");
    }

    const URL = `${url}/courses/platform/${id}`;

    try {

        const response = await fetch(URL, {
            cache: "no-cache",
        });

        if (!response.ok) {
            throw new Error("Error in GetCourseFindByPlatform");
        }

        const apiResponse: ApiResponse<platformsAndCourse> = await response.json();

        if (!apiResponse.success || !apiResponse.data) {
            throw new Error("Error in GetCourseFindByPlatform");
        }

        return apiResponse;
    } catch (error) {
        throw new Error("Error in GetCourseFindByPlatform");
    }
}

export { GET };