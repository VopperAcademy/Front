import Card_platform from "@/components/ui/CardPlatform";

export default function Plataformas() {
  return (
<section>
  <h3 className="text-xl mb-6">
    Elige tu plataforma favorita
  </h3>
  <div className="grid grid-cols-4 gap-[23px]">
<Card_platform img="vercel.svg" alt="xd" title="OwO" description="hola mundo :p"/>
  </div>
</section>
  );
}