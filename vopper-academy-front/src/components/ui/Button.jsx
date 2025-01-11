import Link from "next/link"

export default function Button ({href, text, height, width})  {
    return (
        <Link href={href}>
        <button className={`bg-[#39429f] rounded-full h-${height} w-${width}`}>{text}</button>
        </Link>
    )
}