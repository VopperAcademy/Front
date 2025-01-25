"use client"

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
    <section  className="flex flex-col gap-4 w-full max-h-full overflow-hidden">

      <div className="flex w-full">
        <h3 className="font-montserrat font-medium text-[20px] text-left">Plataformas</h3>
      </div>

      <header className="flex w-full gap-6 flex-nowrap overflow-x-auto h-28"
        style={{
          scrollbarWidth: "none", // Se cambia por thin para que aparezca el scrollbar
          scrollbarColor: "#A9A9A955 transparent",
        }}
      >

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
        />        <LogoCardPlatform
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
      />        <LogoCardPlatform
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
    />        <LogoCardPlatform
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
  />        <LogoCardPlatform
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
/>        <LogoCardPlatform
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

      <h3 className="font-montserrat font-medium text-[20px] text-left">
        Capitulos recien agregados
      </h3>

      <section className="flex w-full gap-6 flex-nowrap overflow-x-auto h-80"
        style={{
          scrollbarWidth: "none", // Se cambia por thin para que aparezca el scrollbar
          scrollbarColor: "#A9A9A955 transparent",
        }}
      >
        {/* <button onClick={() => scrollSection("left")}>
          ⬅️
        </button> */}
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        <CourseCard id="1" img="/imgcourseImg.png" titulo="Principios de animacion" academia="vopper" tecnologias={["hola", "hola"]} />
        {/* <button onClick={() => scrollSection("right")}>
          ➡️
        </button> */}
      </section>

      <h3 className="font-montserrat font-bold text-[20px] text-left">
        <span className="text-[#3A43A0]">Categorias </span>
        que podrian interesarte
      </h3>

      <section className="flex flex-wrap gap-x-8 gap-y-4 overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#A9A9A955 transparent",
        }}
      >
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria="Desarrollo de Videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria="Desarrollo de Videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria="Desarrollo de Videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria="Desarrollo de Videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria="Desarrollo de Videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria="Desarrollo de Videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria="Desarrollo de Videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria="Desarrollo de Videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria="Desarrollo de Videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria="Desarrollo de Videojuegos" />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria="Desarrollo de Videojuegos" />
      </section>
    </section>
  )
}