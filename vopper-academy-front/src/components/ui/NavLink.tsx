"use client"

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function NavLinks({children, href}: {children: React.ReactNode, href: string}) {

  const path = usePathname();

  return(
    <Link
      href={href}
      className={clsx(
        "text-lg font-semibold flex gap-2 items-center px-6 py-2.5 rounded-xl transition-all",
        {
          "bg-primary": path === href,
        }
      )}
    >
      {children}
    </Link>
  )
}