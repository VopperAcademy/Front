import { LucidePlus } from "lucide-react";
import Image from "next/image"

export default function CategoryHeader(
  { temas,
    img,
    categoria,
    alt,
    descripcion,
    vistas
  }:
    {
      temas: string[],
      img: string;
      categoria: string,
      alt: string;
      descripcion: string;
      vistas: number
    }
) {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-6 p-4  w-full max-w-[1515px] h-auto lg:h-[295px] bg-[#A9A9A91A] rounded-md">
      <Image src={img} alt={alt} width={100} height={100} className="w-[184px] h-[275px] rounded-[20px] ml-2" />

      <section className=" flex flex-col justify-center w-[480px] h-full">
        <p className="text-[32px] font-Montserrat font-semibold">{categoria}</p>
        <div className="w-[446px] h-[177px]">
          <p className="text-[16px] font-Montserrat font-normal">{descripcion}</p>
          <p className="flex mt-4  text-[16px] font-bold font-Montserrat">{vistas >= 1000 && <LucidePlus />}{vistas} <span className="font-normal ml-1">vistas</span></p>
          <div className="flex gap-2 pt-2">
            {Array.isArray(temas) &&
              temas.map((tecnologia, index) => (
                <span
                  key={index}
                  className="font-Montserrat font-medium text-[11px] text-white bg-[#FFFFFF]/30 px-2 rounded-3xl"
                >
                  {tecnologia}
                </span>
              ))}
          </div>
        </div>

      </section>

    </section>

  )
}