"use client";
import Image, { StaticImageData } from "next/image";
import { CiPlay1 } from "react-icons/ci";
import { redirect } from "next/navigation";
import courseImg from "@public/img/courseImg.png";

export default function CourseCard({
  id,
  img = courseImg,
  titulo,
  academia,
  tecnologias,
}: {
  id?: string;
  img?: string | StaticImageData;
  titulo: string;
  academia: string;
  tecnologias: string[];
}) {
  const handleClick = () => {
    redirect(`/cursos/modulo/${id}/1`);
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="relative flex flex-col justify-center items-center rounded-2xl transition-all duration-300 ease-in-out transform text-whitehover:text-xl">
        <Image
          className="relative rounded-xl object-cover h-40"
          src={
            typeof img == "string" && img.startsWith("http") ? img : courseImg
          }
          alt="Course Image"
          width={250}
          height={200}
        />
        <div
          onClick={handleClick}
          className="absolute z-0 flex justify-center items-center size-full cursor-pointer hover:bg-slate-50/30 hover:bg-opacity-35 rounded-2xl transition-all"
        >
          <div className="flex items-center justify-center">
            <span className="z-10 rounded-full backdrop-blur-2xl bg-neutral-800/50 p-2">
              <CiPlay1 className="" size={20} />
            </span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-montserrat font-semibold text-[15px]">
          {titulo}
        </h3>
        <p className=" font-montserrat font-normal text-[14px] text-[#A9A9A9]">
          {academia}
        </p>
        <div className="flex gap-2 pt-2">
          {Array.isArray(tecnologias) &&
            tecnologias.map((tecnologia, index) => (
              <span
                key={index}
                className="font-montserrat font-medium text-[11px] text-white bg-[#FFFFFF]/30 px-2 rounded-3xl"
              >
                {tecnologia}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
