"use client";
import Image from "next/image";
import { CiPlay1 } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import { GET } from "@/api/GetChapters";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ApiResponse } from "@/interfaces/ApiResponse";
import { CourseAndChapters } from "@/types/Courses";

function Modulo() {
  
  return (
    <section className="size-full">
      <div className="relative flex flex-col justify-center items-center text-white hover:text-black hover:text-xl">
        <Image
          className="relative object-fill"
          src="/img/videoPortada.png"
          alt="Course Image"
          width={1000}
          height={650}
        />
        <div className="absolute z-0 flex justify-center items-center size-full cursor-pointer hover:bg-slate-50/30 hover:bg-opacity-35">
          <div className="flex items-center justify-center">
            <span className="z-10 rounded-full backdrop-blur-2xl bg-[#FFFF]/50 py-2 px-3">
              <CiPlay1 className="inline-block" size={20} />
            </span>
          </div>
        </div>
      </div>

      <footer className="pt-5">
        <div className="flex justify-between items-center">
          <h1 className="font-Montserrat font-semibold text-[24px] max-w-[600px]">
            {/*title || "Título no disponible"*/}
            Desarrollo frontend
          </h1>
          <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#39429F] px-5 py-1">
            <FaShare />
            Compartir
          </button>
        </div>
        <p className="text-[20px] text-[#6E6E6E] font-Montserrat font-light">
          Por {/*apiResponse?.teacher || "Autor no disponible"*/} pepe aguilar
        </p>
        <div>
          <span className="text-white bg-white/30 rounded-3xl py-1 px-3 text-[11px] font-Montserrat font-medium">
            {/*apiResponse?.teacher || "Idioma no especificado"*/}
            java
          </span>
        </div>
      </footer>
    </section>
  );
}

export default Modulo;
