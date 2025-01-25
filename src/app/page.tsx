import CardPlatform from "@/components/CardPlatform"
import CategoryCard from "@/components/CategoryCard"
import CourseCard from "@/components/CourseCard"
import LogoCardPlatform from "@/components/LogoCardPlatform"

export default function Home() {
  {/*no se ni lo que hice pero ahi esta :v*/}
  const scrollSection = (direction: "left" | "right") => {
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      const scrollAmount = direction === "left" ? -300 : 300; // Ajusta el valor para el desplazamiento
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <>

      <div className="flex w-full">
        <h3 className="font-montserrat font-medium text-[20px] text-left">Plataformas</h3>
      </div>

      <header className="flex flex-wrap justify-between ">

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
      <div className="flex w-full">
        <h3 className="font-montserrat font-medium text-[20px] text-left">Capitulos recien agregados</h3>
      </div>
      <section className="flex gap-[25px] ">
        <button
          onClick={() => scrollSection("left")}

        >
          ⬅️
        </button>
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <button
          onClick={() => scrollSection("right")}

        >
          ➡️
        </button>
      </section>
      <div className="flex w-full">
        <h3 className="font-montserrat font-bold text-[20px] text-left"><span className="text-[#3A43A0]"> Categorias</span>que podrian interesarte</h3>
      </div>
      <section className="flex flex-wrap gap-[25px]">
        <CategoryCard img="/img/categoryImg.jpeg" alt="imagen de ejemplo" categoria="Desarrollo de videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="imagen de ejemplo" categoria="Desarrollo de videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="imagen de ejemplo" categoria="Desarrollo de videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="imagen de ejemplo" categoria="Desarrollo de videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="imagen de ejemplo" categoria="Desarrollo de videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="imagen de ejemplo" categoria="Desarrollo de videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="imagen de ejemplo" categoria="Desarrollo de videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="imagen de ejemplo" categoria="Desarrollo de videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="imagen de ejemplo" categoria="Desarrollo de videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="imagen de ejemplo" categoria="Desarrollo de videojuegos" />
      </section>
    </>
  )
}