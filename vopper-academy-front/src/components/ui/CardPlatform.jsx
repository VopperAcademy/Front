import Image from "next/image"
import Button from "./Button"

export default function Card_platform ({img, alt, title, description}) {
    return (
        <div className="w-[230px] h-[315px] bg-slate-700 flex flex-col items-center p-4">
          <Image
            src={img}
            width={60}
            height={60}
            alt={alt}
            className="rounded-full"
          />

        <h4 className="text-white text-lg font-semibold mb-2">{title}</h4>

        <p className="text-gray-300 text-sm text-center mb-4 overflow-hidden overflow-ellipsis">
            {description}
        </p>

        <Button 
          href="/about" 
          text="Ver" 
          height="10" 
          width="32" 
        />
      </div>
    )
}