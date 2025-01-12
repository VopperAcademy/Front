import CardPlatform from "@/components/ui/CardPlatform";

export default function Plataformas() {
  return (
<section>
  <h3 className="text-xl mb-6">
    Elige tu plataforma favorita
  </h3>
  <div className="grid grid-cols-4 gap-[23px]">
<CardPlatform img="/platzi.png" alt="xd" title="OwO" description="hola mundo :p esta es una descripcion para provar la propiedade de tailwind csas que usa webkit llamade kline clamp texto de relleno auuuuuuuu"/>
  </div>
</section>
  );
}