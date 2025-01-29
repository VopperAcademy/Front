"use client";
import { useState } from "react";

export default function Donation() {
  const [donation, setDonation] = useState(false);
  const [exit, setExit] = useState(false);

  const handleDonation = () => {
    alert("Gracias por tu donación, ahora podremos comprar más café");
    setDonation(true);
  };

  const handleExit = () => {
    alert("Gracias por matar de hambre a los devs");
    setExit(true);
  };

  return (
    <section
      className={`absolute flex flex-col justify-center items-center gap-4 p-4 z-10 min-h-screen w-full bg-slate-800/50 backdrop-blur-md
        ${exit || donation ? "hidden" : ""}
    `}
    >
      <h4 className="text-lg text-center w-72">
        ¿Quieres donarles a estos probres programadores que se mataron haciendo
        esta página? <br />
        :c
      </h4>
      <img src="/img/dogSad.gif" alt="" />
      <div className="flex gap-4">
        <button
          className="bg-sky-600 px-3 py-1 rounded-lg"
          onClick={() => handleDonation()}
        >
          Donar
        </button>
        <button
          className={`bg-red-500 px-3 py-1 rounded-lg }`}
          onClick={handleExit}
        >
          Matar de hambre a los devs
        </button>
      </div>
    </section>
  );
}
