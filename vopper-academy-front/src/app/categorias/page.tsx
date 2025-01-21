import Category_card from "@/components/CategoryCard";
import Image from "next/image";

export default function Categories() {
  const categoria = "Lenguajes de programación";
  return (
    <>
      <div className="flex w-full">
        <h3 className="text-xl text-left font-Montserrat font-medium">
          Explorar todas las categorías
        </h3>
      </div>
      <section className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-[25px] mr-1">
        <Category_card img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <Category_card img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <Category_card img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <Category_card img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <Category_card img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <Category_card img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <Category_card img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <Category_card img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
      </section>
    </>
  );
}
