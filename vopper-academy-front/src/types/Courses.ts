import type { Chapter } from './Chapter'

export type Courses = {
    id: string;
    title: string;
    category: [string];
    teacher: string;
    imageUrl: string;
};

export type CourseAndChapters = {
    id: string;
    title: string;
    description: string;
    categories: string[];
    chapters: Chapter[];
    chaptersCount: number;
    imageUrl: string;
    platform: string;
    teacher: string;
    date: string;
}
