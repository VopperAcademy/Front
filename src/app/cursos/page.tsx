import { GetServerSideProps } from "next";
import { GET } from "@/api/GetCourses";
import CourseCard from "../../components/CourseCard";
import { Courses } from "@/types/Courses";

async function Cursos() {
  const apiResponse = (await GET()).data;
  const courses = apiResponse;

  return (
    <section className="flex flex-col gap-4 w-full max-h-full overflow-hidden">
      <h3 className="text-xl font-montserrat font-medium">
        Explorar todas las categorías
      </h3>
      <section className="flex flex-wrap gap-x-8 gap-y-4 overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#A9A9A955 transparent",
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
    </section>
  );
}

export default Cursos;
