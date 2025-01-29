import CategoryHeader from "@/components/CategoryHeader";
import CourseCard from "@/components/CourseCard";

export default function CategorView() {
  return (
    <section className="h-screen flex flex-col">
      {/* Cabecera */}
      <CategoryHeader
        temas={["hola", "hola"]}
        img="/img/categoryImg.jpeg"
        categoria="Lenguajes de programación"
        alt="Texto de relleno"
        descripcion="Lorem ipsum dolor sit amet consectetur. Velit semper ut risus urna. Luctus nunc nec sed sit amet viverra id lectus."
        vistas={1000}
      />
      <div className="flex">
        <p className="font-montserrat font-medium text-[20px] text-left my-2">Todos los videos</p>
      </div>

      {/* Contenedor con scroll */}
      <div className="flex flex-wrap justify-between gap-y-5 overflow-y-auto">
        <CourseCard
          id="1"
          img="/img/courseImg.png"
          titulo="Principios de animación"
          academia="vopper"
          tecnologias={["hola", "hola"]}
        />
        <CourseCard
          id="1"
          img="/img/courseImg.png"
          titulo="Principios de animación"
          academia="vopper"
          tecnologias={["hola", "hola"]}
        />
        <CourseCard
          id="1"
          img="/img/courseImg.png"
          titulo="Principios de animación"
          academia="vopper"
          tecnologias={["hola", "hola"]}
        />
        <CourseCard
          id="1"
          img="/img/courseImg.png"
          titulo="Principios de animación"
          academia="vopper"
          tecnologias={["hola", "hola"]}
        />
        <CourseCard
          id="1"
          img="/img/courseImg.png"
          titulo="Principios de animación"
          academia="vopper"
          tecnologias={["hola", "hola"]}
        />
        <CourseCard
          id="1"
          img="/img/courseImg.png"
          titulo="Principios de animación"
          academia="vopper"
          tecnologias={["hola", "hola"]}
        />
        <CourseCard
          id="1"
          img="/img/courseImg.png"
          titulo="Principios de animación"
          academia="vopper"
          tecnologias={["hola", "hola"]}
        />
        <CourseCard
          id="1"
          img="/img/courseImg.png"
          titulo="Principios de animación"
          academia="vopper"
          tecnologias={["hola", "hola"]}
        />
        <CourseCard
          id="1"
          img="/img/courseImg.png"
          titulo="Principios de animación"
          academia="vopper"
          tecnologias={["hola", "hola"]}
        />
        <CourseCard
          id="1"
          img="/img/courseImg.png"
          titulo="Principios de animación"
          academia="vopper"
          tecnologias={["hola", "hola"]}
        />
      </div>
    </section>
  );
}
