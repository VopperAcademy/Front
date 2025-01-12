import Image from "next/image"
import Button from "./Button"

export default function CardPlatform ({img, alt, title, description}) {
    return (
        <div className="w-[230px] h-[315px] bg-red-600 flex flex-col items-center p-4">
          <Image
            src={img}
            width={100}
            height={100}
            alt={alt}
            className="rounded-full w-[90px] h-[90px]"
          />

        <p className="text-white text-[16px] font-semibold mb-[10px] mt-[10px]">{title}</p>

        <p className="text-[#A9A9A9] text-[13px] text-center line-clamp-5 mb-4 overflow-hidden overflow-ellipsis ">
            {description}
        </p>

        <Button 
          href="/about" 
          text="Ver" 
          css="py-[10px] px-[57px]" 
        />
      </div>
    )
}