import Image from "next/image";
import { CiPlay1 } from "react-icons/ci";


export default function CourseCard({ img, titulo, academia, tecnologias }) {
  return (
    <section>
      <div className="relative flex flex-col justify-center items-center rounded-2xl">
        <Image
          className="relative rounded-2xl"
          src={img}
          alt="Course Image"
          width={250}
          height={200}
        />
        <div className="absolute z-0 flex justify-center items-center size-full hover:bg-slate-50/30 hover:bg-opacity-35 rounded-2xl">
          <div className="flex items-center justify-center ">
            <span className="z-10 rounded-full backdrop-blur-2xl bg-[#FFFF]/50 py-2 px-3">
              <CiPlay1 className="inline-block text-white" size={20} />
            </span>
          </div>
        </div>
      </div>

      <h3 className=" font-Montserrat font-semibold text-[15px]">{titulo}</h3>
      <p className="font-Montserrat font-normal text-[14px] text-[#A9A9A9]">
        {academia}
      </p>
      <div className="flex gap-2">
        {Array.isArray(tecnologias) &&
          tecnologias.map((tecnologia, index) => (
            <span
              key={index}
              className="font-Montserrat font-medium text-[11px] text-white bg-[#FFFFFF]/30 px-2 rounded-3xl"
            >
              {tecnologia}
            </span>
          ))}
      </div>
    </section>
  );
}