import ModuleCard from "@/components/ModuleCard";
import { GoPaperclip } from "react-icons/go";
import { HiOutlinePlay } from "react-icons/hi";

function CursoLayout({ children}: 
  Readonly<{ children: React.ReactNode }>) {
  
    const modules = [
    {
      img: "/img/courseImg.png",
      title: "Introducción a los algortimos revursivos de python",
      status: "Completo",
      index: 1,
    },
    {
      img: "/img/courseImg.png",
      title: "Java desde 0 a experto",
      status: "Completo",
      index: 2,
    },
    {
      img: "/img/courseImg.png",
      title: "introducción a las bases de datos con sql server",
      status: "Completo",
      index: 3,
    },
    {
      img: "/img/courseImg.png",
      title: "JavaScritp desde 0 a experto",
      status: "Completo",
      index: 4,
    },
    {
      img: "/img/courseImg.png",
      title: "DotNet + MAUI + ASP.NET Core + Blazor",
      status: "Completo",
      index: 5,
    },
    {
      img: "/img/courseImg.png",
      title: "Introducción",
      status: "Completo",
      index: 6,
    },
    {
      img: "/img/courseImg.png",
      title: "Introducción",
      status: "Completo",
      index: 7,
    },
    {
      img: "/img/courseImg.png",
      title: "Introducción",
      status: "Completo",
      index: 8,
    },
    {
      img: "/img/courseImg.png",
      title: "Introducción",
      status: "Completo",
      index: 9,
    },
    {
      img: "/img/courseImg.png",
      title: "Introducción",
      status: "Completo",
      index: 10,
    },
    {
      img: "/img/courseImg.png",
      title: "Introducción",
      status: "Completo",
      index: 11,
    },
  ];

  return (
    <section className="flex size-full flex-row-reverse overflow-y-auto">
      <aside className="flex flex-col  rounded-xl px-7">
        <section className="bg-[#26282D] rounded-xl">
          <header className="flex m-3 items-center">
            <h2 className="font-semibold">Capítulos</h2>
          </header>
          <ul
            className="flex flex-col gap-2 px-4 py-5  overflow-y-auto max-h-[550px]"
            style={{
              scrollbarWidth: "auto",
              scrollbarColor: "#A9A9A9 #26282D",
            }}
          >
            {modules.map((module) => {
              return (
                <ModuleCard
                  key={module.index}
                  img={module.img}
                  title={module.title}
                  status={module.status}
                  index={module.index}
                />
              );
            })}
          </ul>
        </section>
        <section className="flex justify-center border-t-[#26282D] border-t-4 my-3 mx-4">
          <div className="flex gap-5 pt-3">
            <button className="flex text-white/50 hover:text-white gap-2 items-center">
              <GoPaperclip />
              Recursos
            </button>
            <button className="flex text-white/50 hover:text-white gap-2 items-center">
              <HiOutlinePlay />
              Clases
            </button>
          </div>
        </section>
      </aside>
      <main className="flex flex-col flex-auto">{children}</main>
    </section>
  );
}

export default CursoLayout;
