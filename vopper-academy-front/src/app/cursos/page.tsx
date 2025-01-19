import { GetServerSideProps } from "next";
import { GET } from "@/api/GetCourses";
import CourseCard from "../../components/CourseCard";
import { Courses } from "@/types/Courses";

async function Cursos() {
  const apiResponse = (await GET()).data;
  const courses = apiResponse;

  return (
    <section
      className="grid grid-cols-4 gap-10 overflow-y-auto max-h-[680px] pb-10 px-5 w-full"
      style={{
        scrollbarWidth: "auto",
        scrollbarColor: "#A9A9A9 #26282D",
      }}
    >
      {courses.map((curso) => {
        return (
          <CourseCard
            key={curso.id}
            titulo={curso.title}
            academia={curso.teacher}
            tecnologias={curso.category}
            img={curso.imageUrl}
            id={curso.id}
          />
        );
      })}
    </section>
  );
}

export default Cursos;
