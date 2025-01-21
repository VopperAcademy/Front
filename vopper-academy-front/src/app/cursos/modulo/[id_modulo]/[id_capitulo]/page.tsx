import { FaShare } from "react-icons/fa";
import { useCourseStore } from "@/stores/course";
import { GET } from "@api/GetCourseFindChapter";
import { notFound } from "next/navigation";

async function Modulo({
  params,
}: {
  params: { id_modulo: string; id_capitulo: string };
}) {
  const { id_modulo, id_capitulo } = await params;

  if (!id_modulo || !id_capitulo) {
    throw new Error("No se ha encontrado el id del módulo o capítulo");
  }
  const apiResponse = await GET(
    id_modulo,
    id_capitulo
  );

  if (!apiResponse || !apiResponse.data) {
    return(
      <div>
        <h1>Capítulo no encontrado</h1>
      </div>
    )
  }

  const {data, errorMessage, statusCode, success} = apiResponse;



  return (
    <section className="size-full">
      <iframe
        width="900"
        height="500"
        src={data.url}
        scrolling="No"
        allow="fullscreen"
      ></iframe>

      <footer className="pt-5">
        <div className="flex justify-between items-center">
          <h1 className="font-Montserrat font-semibold text-[24px] max-w-[600px]">
            {data?.title}
          </h1>
          <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#39429F] px-5 py-1">
            <FaShare />
            Compartir
          </button>
        </div>
        <p className="text-[20px] text-[#6E6E6E] font-Montserrat font-light">
          Por {data?.views}
        </p>
        <div>
          {/*data?.category.map((category) => {
            return (
              <span
                className="text-white bg-white/30 rounded-3xl py-1 px-3 text-[11px] font-Montserrat font-medium"
                key={category}
              >
                {category}
              </span>
            );
          })*/}
        </div>
      </footer>
    </section>
  );
}

export default Modulo;
