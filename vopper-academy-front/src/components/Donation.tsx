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
    <div
      className={`absolute flex flex-col items-center gap-4 p-4 z-10 w-full bg-slate-800/50 backdrop-blur-md
        ${exit || donation ? "hidden" : ""}
    `}
    >
      <h2>
        ¿Quieres donarles a estos probres programadores que se mataron haciendo
        esta página? <br /> <p className="text-center">:c</p>
      </h2>
      <img src="/img/dogSad.gif" alt="" />
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
  );
}
