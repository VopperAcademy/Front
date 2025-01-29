import type { CourseAndChapters } from "@/types/Courses";
import {create} from "zustand";
import {GET} from "@api/GetCourseFindById"
import  {CourseStateAndChapterState as CourseState} from "@/interfaces/CourseAndChapterState";

export const useCourseStore = create<CourseState>((set) => ({
  data: null,
  loading: false,
  error: null,
  

  fetchCourse: async (id) => {
    set({ loading: true, error: null });
    
    try {
      const response = (await GET({ idCourse: id  }));

      console.log(response.data);

      if (!response.success) {
        set({ error: response.errorMessage, loading: false });
        return;
      }

      const data = response.data;

      if (!data) {
        set({error: "Curso no encontrado", loading: false });
        return;
      }

      set({
        data: {
          id: data.id,
          title: data.title || "Sin título",
          imageUrl: data.imageUrl || "/img/defaultImage.png",
          description: data.description || "Sin descripción",
          teacher: data.teacher || "Desconocido",
          categories: data.categories || [],
          chapters: data.chapters || [],
          chaptersCount: data.chaptersCount || 0,
          platform: data.platform || "Desconocido",
          date: data.date || "Desconocido",
        },
        loading: false,
      });
    } catch (error: any) {
      set({ error: error.message || "Error al obtener el curso.", loading: false });
    }
  },
}));
