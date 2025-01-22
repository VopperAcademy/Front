import CategoryCard from "@/components/CategoryCard";
import Image from "next/image";

export default function Categories() {
  const categoria = "Lenguajes de programación";
  return (
    <section className="flex flex-col gap-4 w-full max-h-full overflow-hidden">
      <h3 className="text-xl font-montserrat font-medium">
        Explorar todas las categorías
      </h3>
      <section className="flex flex-wrap gap-x-8 gap-y-4 overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#A9A9A955 transparent",
        }}
      >
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
        <CategoryCard img="/img/categoryImg.jpeg" alt="OwO" categoria={categoria} />
      </section>
    </section>
  );
}
