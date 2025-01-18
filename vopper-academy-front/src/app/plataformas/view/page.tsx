import CourseCard from "@/components/CourseCard"
import Image from "next/image";


export default function Pltaform_view () {
    const image = "/img/courseImg.png";

    const Cursos = [
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
      {
        image: image,
        path: "https://via.placeholder.com/150",
        titulo: "Curso de React",
        academia: "Academia de Código",
        tecnologias: ["React", "JavaScript"],
      },
    ];
  
return (
    <>
        {/* Header o barra superior */}
        <div className="flex gap-[10px] items-center bg-[#A9A9A91A] h-24 w-full rounded-l-full mx-[25px] font-Montserrat text-[20px]">  
            <Image src="/platzi.png" alt="UwU" width={100} height={100} className=" rounded-full h-[90px] w-[90px] p-[10px]"/>
            <p>Platzi</p>
        </div>

        {/* Sección de cursos */}
        <section
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full"
        >
            {Cursos.map((curso, index) => (
                <CourseCard
                    key={index}
                    img={curso.image}
                    titulo={curso.titulo}
                    academia={curso.academia}
                    tecnologias={curso.tecnologias}
                />
            ))}
        </section>
    </>
);
}    