"use client";
import ModuleCard from "@/components/ModuleCard";
import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { GoPaperclip } from "react-icons/go";
import { HiOutlinePlay } from "react-icons/hi";
import { useCourseStore } from "@/stores/course";

function CursoLayout({ children }: { children: React.ReactElement }) {
  const params = useParams();

  const id_modulo: string | undefined = params.id_modulo?.toString();
  const id_chapter: string | undefined = params.id_capitulo?.toString() || "1"; // id del capítulo por default es el 1
  const { data, fetchCourse } = useCourseStore();

  useEffect(() => {
    if (id_modulo) {
      fetchCourse(id_modulo);
    }
  }, [id_modulo, fetchCourse]);

  return (
    <section className="grid grid-cols-[1fr_350px] grid-rows-1 w-full h-full overflow-hidden gap-8">
      <main className="flex flex-col flex-auto ">{children}</main>
      <aside className="flex flex-col overflow-hidden h-full">
        <section className="bg-[#26282D] rounded-xl overflow-hidden p-4 flex flex-col gap-4 h-full">
          <header className="flex flex-col ">
            <h2 className="text-2xl font-semibold">Capítulos</h2>
            <p className="text-sm font-montserrat ">
              número de capítulos: {data?.chapters.length} /{" "}
              {data?.chaptersCount}
            </p>
          </header>
          <ul
            className="flex flex-col gap-4 overflow-y-auto h-full"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#A9A9A955 transparent",
            }}
          >
            {data?.chapters.map((module, index = 1) => {
              return (
                <ModuleCard
                  key={index + 1}
                  img={module.imageUrl}
                  title={module.title}
                  status={module.duration}
                  index={index + 1}
                  id_modulo={id_modulo || ""}
                  idChapter={parseInt(id_chapter)}
                />
              );
            })}
          </ul>
          <p className="text-white text-center animate-pulse">{` ${
            data?.chaptersCount! > data?.chapters.length! ? "Proximamente" : ""
          } `}</p>
        </section>
        <section className="flex justify-center">
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
    </section>
  );
}

export default CursoLayout;
