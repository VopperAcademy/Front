import { Courses } from '../types/Courses'; // Interface Courses
import { ApiResponseList } from '@interfaces/ApiResponse'; // Interface ApiResponse


const url = process.env.NEXT_PUBLIC_API_URL;

export const GET = async (): Promise<ApiResponseList<Courses>> => {
  
  if (!url) {
    throw new Error('La variable de entorno  no está definida.');
  }

  const URL = `${url}/courses`;

  try {
    const response = await fetch(URL, {
      cache: 'no-store', // Opcional: evita caché en datos dinámicos
    });

    if (!response.ok) {
      throw new Error(
        `Error al obtener los cursos: ${response.status} ${response.statusText}`
      );
    }

    const apiResponse: ApiResponseList<Courses> = await response.json();

    // Validar que la respuesta tenga la estructura esperada
    if (!apiResponse.success || !Array.isArray(apiResponse.data)) {
      throw new Error(
        `La estructura de los datos es inválida: ${JSON.stringify(apiResponse)}`
      );
    }

    return apiResponse; // Devuelve toda la respuesta, incluyendo `data`
  } catch (error) {
    console.error('Error en getCourse:', error);
    throw new Error('Hubo un problema al obtener los cursos.');
  }
};
