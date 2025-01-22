import Image from "next/image";

export default function CategoryCard ({img, alt, categoria}:{img:string, alt: string, categoria:string}) {
  return (
  <div className="flex flex-col w-52 gap-2">
    <Image src={img} alt={alt} width={240} height={426} className="w-full aspect-[9/14] rounded-xl"/>
    <p className="font-montserrat font-medium">{categoria}</p>
  </div>
  )
}