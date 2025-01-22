import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import platzi from "@public/platzi.png";

export default function CardPlatform({
  img,
  alt,
  title,
  description,
  href,
}: {
  img: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
  href: string;
}) {
  const image = typeof img === "string" && img.trim() !== "" ? img : platzi;
  if (image == null) {
    console.log("img is null");
  }
  return (
    <div className="w-[230px] h-[315px]  flex flex-col items-center p-4">
      <Image
        src={image}
        width={100}
        height={100}
        alt={alt || "imagen de plataforma"}
        className="rounded-full w-[90px] h-[90px]"
      />

      <p className="text-white text-[16px] font-semibold mb-[10px] mt-[10px]">
        {title}
      </p>

      <p className="text-[#A9A9A9] text-[13px] text-center line-clamp-5 mb-4 overflow- max-h-20  overflow-ellipsis ">
        {description}
      </p>

      <Button href={href} text="Ver" css="py-[10px] px-[57px]" />
    </div>
  );
}
