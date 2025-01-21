import CourseCard from "@/components/CourseCard";
import Image from "next/image";
import { GET as getCourseFindByPlatform } from "@/api/GetCourseFindByPlatform";
import { Courses } from "@/types/Courses";

export default async function Pltaform_view({ params, }: {params: { id: string };}) {
  
  const { id } = await params;

  if (!id) {
    throw new Error("No se ha encontrado el id de la plataforma");
  }

  const platform = (await getCourseFindByPlatform(id)).data;

  const courses: Courses[] = platform.filterCourses;

  return (
    <>
      {/* Header o barra superior */}
      <header className="flex gap-[10px] items-center bg-[#A9A9A91A] h-24 w-full rounded-l-full mx-[25px] font-Montserrat text-[20px]">
        <figure className="flex justify-center items-center rounded-full h-[80px] w-[80px] p-[10px] z-10 ">
          <Image
            src={platform.imagePlatform}
            alt="imagen de plataforma"
            width={110}
            height={110}
            className="size-full rounded-full object-fill object-center"
          />
        </figure>
        <p>{platform.namePlatform}</p>
      </header>

      {/* Sección de cursos */}
      <section
        className="grid grid-cols-4 gap-10 overflow-y-auto max-h-[555px] pb-32 px-5 w-full"
        style={{
          scrollbarWidth: "auto",
          scrollbarColor: "#A9A9A9 #A9A9A91A",
        }}
      >
        {courses.map((curso) => (
          <CourseCard
            key={curso.id}
            img={curso.imageUrl}
            titulo={curso.title}
            academia={curso.teacher}
            tecnologias={curso.category}
            id={curso.id}
          />
        ))}
      </section>
    </>
  );
}
