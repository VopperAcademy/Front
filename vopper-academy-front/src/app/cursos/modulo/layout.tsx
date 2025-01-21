"use client";
import ModuleCard from "@/components/ModuleCard";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GoPaperclip } from "react-icons/go";
import { HiOutlinePlay } from "react-icons/hi";
import { useCourseStore } from "@/stores/course";


function CursoLayout({children}: {children: React.ReactElement}) {

  const params = useParams();
  const id_modulo: string | undefined = params.id_modulo?.toString(); 
  const id_chapter: string | undefined = params.id_capitulo?.toString() || "1"; // id del capítulo por default es el 1

  const {data, fetchCourse, loading, error} = useCourseStore();

  useEffect(() => {
    if (id_modulo) {
      fetchCourse(id_modulo);
    }
  }, [id_modulo, fetchCourse]);

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
            {data?.chapters.map((module, index) => {
              return (
                <ModuleCard
                  key={index+1}
                  img={module.imgUrl || "../../img/courseImg.png"}
                  title={module.title}
                  status={module.duration}
                  index={index + 1}
                  id_modulo={id_modulo || ""}
                  idChapter={parseInt(id_chapter)}
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
      <main className="flex flex-col flex-auto">
        {children}
      </main>
    </section>
  );
}

export default CursoLayout;
