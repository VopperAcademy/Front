import { Courses } from './Courses';

export type Platforms = {
    id: string,
    name: string,
    urlImage: string,
    description: string,
}

export type platformsAndCourse = {
    filterCourses: Courses[],
    totalCourses: number,
    namePlatform: string,
    descriptionPlatform: string,
    imagePlatform: string,
}