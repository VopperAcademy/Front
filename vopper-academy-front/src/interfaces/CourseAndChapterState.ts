import { CourseAndChapters } from '../types/Courses';

export interface CourseStateAndChapterState {
  data: CourseAndChapters | null;
  loading: boolean;
  error: string | null;

  fetchCourse: (id: string | undefined) => Promise<void>;
}