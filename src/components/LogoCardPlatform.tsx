import Image from "next/image"


export default function LogoCardPlatform ({img, alt, title}:{ img:string, alt:string, title:string }) {
    return (
        <button className="flex flex-col items-center w-[109px] h-[124px]">  
            <Image src={img} alt={alt} width={100} height={100} className=" rounded-full h-[80px] w-[80px] p-[10px] grayscale hover:grayscale-0"/>
            <p>{title}</p>
        </button>
    )
}