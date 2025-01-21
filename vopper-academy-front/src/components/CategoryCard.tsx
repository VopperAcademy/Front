import Image from "next/image";

export default function Category_card ({img, alt, categoria}:{img:string, alt: string, categoria:string}) {
    return (
    <div className="w-[184px] h-[291px]">
            <Image src={img} alt={alt} width={184} height={256} className=" h-[256px] rounde-[20px]"/>
            <p className="font-Montserrat font-medium">{categoria}</p>
    </div>
    )
}