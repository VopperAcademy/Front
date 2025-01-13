
export default function ModuleCard({ img, title, status, index }: 
  {img: string, title: string, status: string, index: number}) {
  return (
    <section className="flex hover:bg-black/30 backdrop-blur-2xl rounded-lg px-2 py-3 transition-all duration-300 ease-in-out">
      <div className="flex flex-col items-center justify-center pr-4">
        <span className="py-[2px] px-2 text-sm bg-[#9BA4FD] text-white rounded-full">
          {index}
        </span>
      </div>
      <div className="flex">
        <img src={img} alt="portada" className="w-[50px] h-[30px] rounded-lg" />
        <div className="pl-2">
          <h3 className="max-w-[150px] text-[13px] text-[#D4D4D4] font-Montserrat font-light">
            {title}
          </h3>
          <p className="font-Montserrat text-[11px] text-[#9BA4FD] font-semibold ">
            {status}
          </p>
        </div>
      </div>
    </section>
  );
}
