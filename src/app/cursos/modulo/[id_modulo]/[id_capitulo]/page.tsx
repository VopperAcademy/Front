"use client";
import { FaShare } from "react-icons/fa";
import { useCourseStore } from "@/stores/course";
import { GET } from "@api/GetCourseFindChapter";
import NotFound from "@/app/not-found";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Chapter } from "@/types/Chapter";
import Loading from "@/app/loading";
import { Eye } from "lucide-react";

function Modulo() {
  const param = useParams();
  const id_modulo: string = param.id_modulo?.toString() || "";
  const id_capitulo: string = param.id_capitulo?.toString() || "";

  const [dataChapter, setDataChapter] = useState<Chapter | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  {/*Logica del PopUp tipo modaL me dan feedback de mis practicas de codigo porfa, quiero mejorar :D*/ }

  const [showAd, setShowAd] = useState(true);
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleAdClick = () => {
    if (countdown !== null) return;
    setCountdown(15);
    const timer = setInterval(() => setCountdown((prev) => (prev && prev > 1 ? prev - 1 : (clearInterval(timer), setShowAd(false), null))), 1000);
  };

  {/*termina la logica del PopUp*/ }
  const { data, fetchCourse } = useCourseStore();

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
        <NotFound />
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="size-full flex flex-col gap-4">
      {showAd && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg text-black flex flex-col items-center relative">
            <p className="text-2xl font-bold font-montserrat">¡Haz clic en el anuncio para continuar!</p>


            {countdown !== null && (
              <div className=" flex flex-col my-3">
                <p className="text-xl font-bold font-montserrat">Espera: <span className="text-orange-400 text-2xl">{countdown}</span>s para continuar</p>

              </div>
            )}

            <div className="w-auto h-auto flex justify-center items-center">

              <button onClick={handleAdClick} className="w-full h-full">
                {/*Aqui va el anuncio por lo mientras es una imagen*/}
                <img src="/img/dogSad.gif" alt="Anuncio" />
              </button>
            </div>


          </div>
        </div>
      )}

      <iframe
        className="w-full aspect-video rounded-xl"
        src={dataChapter?.url}
        scrolling="no"
        allow="fullscreen"
      />

      <footer className="flex gap-1 flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start gap-1">
            <h1 className="font-montserrat font-semibold text-[24px] max-w-[600px]">
              {data?.title}
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <span className=" text-white/70 flex items-center gap-4">
              {/* <Eye /> */}
              vistas: {dataChapter?.views}
            </span>
            <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#39429F] px-5 py-1">
              <FaShare />
              Compartir
            </button>
          </div>
        </div>
        <p className="text-[20px] text-[#6E6E6E] font-montserrat font-light">
          Por {data?.teacher}
        </p>
        <div>
          {data?.categories.map((category) => {
            return (
              <span
                className="text-white bg-white/30 rounded-3xl py-1 px-3 text-[11px] font-montserrat font-medium"
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