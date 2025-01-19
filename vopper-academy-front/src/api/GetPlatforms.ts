import { ApiResponseList } from "@/interfaces/ApiResponse";
import type { Platforms } from "@/types/Platforms";


const url = process.env.NEXT_PUBLIC_API_URL;

const GET = async (): Promise<ApiResponseList<Platforms>> => {

    if (!url) {
        throw new Error('La variable de entorno  no está definida.');
    }

    const URL = `${url}/platforms`;

    try {

        const response = await fetch(URL, {
            cache: 'no-store', // Opcional: evita caché en datos dinámicos
        });

        if (!response.ok) {
            throw new Error(
                `Error al obtener los cursos: ${response.status} ${response.statusText}`
            );
        }

        const apiResponse: ApiResponseList<Platforms> = await response.json();

        if (apiResponse.success === false || !Array.isArray(apiResponse.data)) {
            throw new Error(
                `La estructura de los datos es inválida: ${JSON.stringify(apiResponse)}`
            );
        }

        return apiResponse; // Devuelve toda la respuesta, incluyendo `data`

    } catch (error) {
        throw new Error('Hubo un problema al obtener los cursos.');
    }
}

export { GET };