import { CourseAndChapters } from '../types/Courses'; // Interface Courses
import { ApiResponse } from '@interfaces/ApiResponse'; // Interface ApiResponse

const url = process.env.NEXT_PUBLIC_API_URL;

export const GET = async ({
    idCourse,
}: {
    idCourse: string | undefined;
}): Promise<ApiResponse<CourseAndChapters>> => {
    /*
      // Validación de la variable de entorno
      if (!process.env.API_URL) {
          throw new Error('La variable de entorno API_URL no está definida.');
      }
      console.log(idCourse)
      if (!idCourse) {
          throw new Error('El ID del curso no está definido.');
      }
  */
    const URL = `${url}/courses/${idCourse}`;

    try {
        const response = await fetch(URL, {
            cache: 'no-store', // Evitar caché para datos dinámicos
        });

        if (!response.ok) {
            throw new Error(
                `Error al obtener los cursos: ${response.status} ${response.statusText}`
            );
        }

        const apiResponse: ApiResponse<CourseAndChapters> = await response.json();

        // Validación de la estructura de la respuesta
        if (!apiResponse.success || !apiResponse.data) {
            throw new Error(
                `La estructura de los datos es inválida: ${JSON.stringify(apiResponse)}`
            );
        }

        return apiResponse;
    } catch (error: any) {
        console.error(`Error al realizar la solicitud: ${error.message}`);
        throw new Error('Hubo un problema al obtener los cursos.');
    }
};
