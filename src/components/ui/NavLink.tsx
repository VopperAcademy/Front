"use client"

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function NavLinks({children, href, className}: {children: React.ReactNode, href: string, className?: string}) {

  const path = usePathname();

  return(
    <Link
      href={href}
      className={clsx(
        `text-lg font-semibold flex gap-2 items-center rounded-xl transition-all ${className}`,
        {
          "bg-primary": path === href,
        }
      )}
    >
      {children}
    </Link>
  )
}