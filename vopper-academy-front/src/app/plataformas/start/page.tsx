import CourseCard from "@/components/CourseCard"
import Dropdown from "@/components/Dropdown";
import LogoCardPlatform from "@/components/LogoCardPlatform";
import Image from "next/image"

export default function StartPlatform () {
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
      
    ];
    const platform = "platzi"
    const categoria_global = "Desarrollo web"
    const options = [
        { label: "CSS", value: "CSS" },
        { label: "Ejemplo ejemploso", value: "Ejemplo ejemploso" },
      ];
    return (
    <>
        {/* Header o barra superior */}
      {/* Header o barra superior */}
<div className="flex pl-4 w-full">
<h3 className="text-xl text-left">Plataformas</h3>
</div>

      <header className="flex gap-1 items-center">

        <LogoCardPlatform
        img="/platzi.png"
        alt="holaaaaa"
        title="Prueba"
        />
        <LogoCardPlatform
        img="/platzi.png"
        alt="holaaaaa"
        title="Prueba"
        />
        <LogoCardPlatform
        img="/platzi.png"
        alt="holaaaaa"
        title="Prueba"
        />
        <LogoCardPlatform
        img="/platzi.png"
        alt="holaaaaa"
        title="Prueba"
        />

        <LogoCardPlatform
        img="/platzi.png"
        alt="holaaaaa"
        title="Prueba"
        />
        <LogoCardPlatform
        img="/platzi.png"
        alt="holaaaaa"
        title="Prueba"
        />
        <LogoCardPlatform
        img="/platzi.png"
        alt="holaaaaa"
        title="Prueba"
        />
        <LogoCardPlatform
        img="/platzi.png"
        alt="holaaaaa"
        title="Prueba"
        />
        <LogoCardPlatform
        img="/platzi.png"
        alt="holaaaaa"
        title="Prueba"
        />

      </header>

      <section className=" flex w-full">
        <div className=" pl-4 font-Montserrat">
        <p className="text-[20px] font-semibold">Cursos de {platform}</p>
          <div className="flex gap-[10px] text-[14px] font-normal"><p>Filtrar por:</p><Dropdown options={options}/></div>
        <p className="text-[20px] font-medium">{categoria_global}</p>
        </div>

      </section>

        {/* Sección de cursos */}
        <section
            className="grid grid-cols-4 gap-10 overflow-y-auto max-h-[680px] pb-10 px-5 w-full">
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
)
}