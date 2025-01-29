import { redirect } from "next/navigation";

export default function ModuleCard({ img, title, status, index, id_modulo, idChapter }: 
  {img: string, title: string, status: string, index: number, id_modulo: string, idChapter: number}) {
  
    const handleClick = () => {
      redirect(`/cursos/modulo/${id_modulo}/${index}`);
    }
  
    return (
    <section onClick={handleClick}
    className={`
      flex rounded-lg transition-allcursor-pointer items-center gap-4
      `}>
      {/* ${index === idChapter ? "bg-[#9BA4FD] text-white" : "hover:bg-[#9BA4FD] hover:text-white:"} */}
      <span className="size-8 text-sm bg-[#6E6E6E] text-white rounded-full flex items-center justify-center">
        {index}
      </span>
      <div className="flex gap-2 w-60">
        <img src={img} alt="portada" className="size-16 object-cover rounded-lg" />
        <div className="flex flex-col justify-around">
          <h3 className="max-w-[150px] text-[13px] text-[#D4D4D4] font-montserrat text-balance line-clamp-2">
            {title}
          </h3>
          <p className="font-montserrat text-[11px] text-[#9BA4FD] font-semibold">
            {status}
          </p>
        </div>
      </div>
    </section>
  );
}
