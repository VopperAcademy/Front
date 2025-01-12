import Image from "next/image"
import Button from "./Button"

export default function CardPlatform ({img, alt, title, description}) {
    return (
        <div className="w-[230px] h-[315px] bg-slate-700 flex flex-col items-center p-4">
          <Image
            src={img}
            width={100}
            height={100}
            alt={alt}
            className="rounded-full w-[90px] h-[90px]"
          />

        <h4 className="text-white text-lg font-semibold mb-[6px]">{title}</h4>

        <p className="text-[#A9A9A9] text-sm text-center line-clamp-5 mb-4 overflow-hidden overflow-ellipsis ">
            {description}
        </p>

        <Button 
          href="/about" 
          text="Ver" 
          height="[10px]" 
          width="[32px]" 
        />
      </div>
    )
}