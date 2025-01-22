"use client";
import { FaShare } from "react-icons/fa";
import { useCourseStore } from "@/stores/course";
import { GET } from "@api/GetCourseFindChapter";
import NotFound from "@/app/not-found";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Chapter } from "@/types/Chapter";
import Loading from "@/app/loading";

function Modulo() {
  const param = useParams();
  const id_modulo: string = param.id_modulo?.toString() || "";
  const id_capitulo: string = param.id_capitulo?.toString() || "";

  const [dataChapter, setDataChapter] = useState<Chapter | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const {data, fetchCourse} = useCourseStore();

  useEffect(() => {
    if (!id_modulo || !id_capitulo) {
      setError("Both id_modulo and id_capitulo are required.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await GET(id_modulo, id_capitulo);
        if (response.success) {
          setDataChapter(response.data);
        } else {
          setError(response.errorMessage);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    fetchCourse(id_modulo);
  }, [id_modulo, fetchCourse, id_capitulo]);

  if (error) {
    return (
      <div className="flex justify-center items-center size-full">
        <NotFound/>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="size-full">
      <iframe
        width="900"
        height="500"
        src={dataChapter?.url}
        scrolling="no"
        allow="fullscreen"
      ></iframe>

      <footer className="pt-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start gap-1">
            <h1 className="font-Montserrat font-semibold text-[24px] max-w-[600px]">
              {data?.title}
            </h1>
            <p className="text-sm text-white/70">
              vistas: {dataChapter?.views}
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#39429F] px-5 py-1">
            <FaShare />
            Compartir
          </button>
        </div>
        <p className="text-[20px] text-[#6E6E6E] font-Montserrat font-light">
          Por {data?.teacher}
        </p>
        <div>
          {data?.categories.map((category) => {
            return (
              <span
                className="text-white bg-white/30 rounded-3xl py-1 px-3 text-[11px] font-Montserrat font-medium"
                key={category}
              >
                {category}
              </span>
            );
          })}
        </div>
      </footer>
    </section>
  );
}

export default Modulo;
