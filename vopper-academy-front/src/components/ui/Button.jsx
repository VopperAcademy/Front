import Link from "next/link"

export default function Button ({href, text, css})  {
    return (
        <Link href={href}>
        <button className={`bg-[#39429f] rounded-full text-[16px] px-[57px] py-${css}`}>{text}</button>
        </Link>
    )
}