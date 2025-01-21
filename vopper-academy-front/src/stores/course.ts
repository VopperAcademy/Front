import type { CourseAndChapters } from "@/types/Courses";
import {create} from "zustand";
import {GET} from "@api/GetCourseFindById"
import  {CourseStateAndChapterState as CourseState} from "@/interfaces/CourseAndChapterState";
import {GET as getCourseFindChapter} from "@api/GetCourseFindChapter"

export const useCourseStore = create<CourseState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchCourse: async (id) => {
    set({ loading: true, error: null });
    try {
      const data: CourseAndChapters = (await GET({ idCourse: id })).data;

      set({
        data: {
          id: data.id,
          imageUrl: data.imageUrl || "/img/defaultImage.png",
          title: data.title || "Sin título",
          teacher: data.teacher || "Desconocido",
          category: data.category || [],
          chapters: data.chapters || [],
        },
        loading: false,
      });
    } catch (error: any) {
      set({ error: error.message || "Error al obtener el curso.", loading: false });
    }
  },
}));
