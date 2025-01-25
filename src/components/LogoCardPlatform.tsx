import Image from "next/image"


export default function LogoCardPlatform ({img, alt, title}:{ img:string, alt:string, title:string }) {
    return (
        <button className="flex flex-col items-center gap-2 min-w-16 min-h-16 aspect-square">  
            <Image src={img} alt={alt} width={100} height={100} className=" rounded-full size-16 grayscale hover:grayscale-0 transition-all object-cover"/>
            <p>{title}</p>
        </button>
    )
}