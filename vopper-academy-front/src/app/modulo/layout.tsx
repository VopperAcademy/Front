"use client";
import { GET } from "@/api/GetChapters";
import ModuleCard from "@/components/ModuleCard";
import { CourseAndChapters } from "@/types/Courses";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GoPaperclip } from "react-icons/go";
import { HiOutlinePlay } from "react-icons/hi";

function CursoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const params = useParams();
  const id: string | undefined = params.id?.toString(); // Parámetro de la URL

  const [apiResponse, setApiResponse] = useState<CourseAndChapters | null>(
    null
  ); // Estado para almacenar la respuesta de la API
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga
  const [error, setError] = useState<string | null>(null); // Estado de error

  // Efecto para cargar los datos al montar el componente
  useEffect(() => {
    if (!id) {
      setError("El ID del curso no está definido.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = (await GET({ idCourse: id })).data;
        setApiResponse(response);
      } catch (err: any) {
        setError(err.message || "Error al obtener los datos del curso.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center size-full">
        <p>Cargando datos del curso...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center size-full">
        <p>Error: {error}</p>
      </div>
    );
  }

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
            {apiResponse?.chapters.map((module, index) => {
              return (
                <ModuleCard
                  key={index}
                  img={module.imgUrl || "../../img/courseImg.png"}
                  title={module.title}
                  status={module.duration}
                  index={index+1}
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
      <main className="flex flex-col flex-auto">{
        children
      }</main>
    </section>
  );
}

export default CursoLayout;
