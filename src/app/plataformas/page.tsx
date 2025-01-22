import CardPlatform from "@/components/CardPlatform";
import { GET } from "@api/GetPlatforms";

export default async function Plataformas() {
  
  const apiResponse = await GET();

  if (!apiResponse || !apiResponse.data) {
    console.error("Error fetching platforms:", apiResponse);
    return <p>Error al cargar las plataformas.</p>;
  }
  const platforms = apiResponse.data || [];

  return (
    <section>
      <h3 className="text-xl mb-6">Elige tu plataforma favorita</h3>
      <div className="grid grid-cols-4 gap-[23px]">
        {platforms.map((platform) => {
          return (
            <CardPlatform
              key={platform.id}
              img={platform.urlImage}
              alt={platform.description}
              title={platform.name}
              description={platform.description}
              href={`/plataformas/view/${platform.id}`}
            />
          );
        })}
      </div>
    </section>
  );
}
