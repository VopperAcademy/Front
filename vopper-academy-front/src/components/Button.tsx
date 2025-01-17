import Link from "next/link"

export default function Button ({href, text, css}: {href:string, text:string, css:string})  {
    return (
        <Link href={href}>
        <button className={`bg-[#39429f] rounded-full text-[16px] ${css}`}>{text}</button>
        </Link>
    )
}