import CourseCard from "../../components/CourseCard";


function Cursos() {
  
  const image = "/img/courseImg.png"

  const Cursos = [
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },{
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    },
    {
      image: image,
      path: "https://via.placeholder.com/150",
      titulo: "Curso de React",
      academia: "Academia de Código",
      tecnologias: ["React", "JavaScript"]
    } 
  ]

  return (
    <section className="grid grid-cols-4 gap-10 overflow-y-auto max-h-[700px] no-scroll-cursor py-10">
      {
        Cursos.map((curso, index) => (
          <CourseCard key={index}
            img={curso.image}
            titulo={curso.titulo}
            academia={curso.academia}
            tecnologias={curso.tecnologias}
        />
        ))
      }
    </section>
  );
}

export default Cursos;