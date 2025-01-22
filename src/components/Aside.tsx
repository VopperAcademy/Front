"use client"

import { House, Box, Layers, FolderOpen, Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./ui/NavLink";

export default function Aside() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <aside className={
      `
        ${isMenuOpen ? "w-[80px]" : "w-[260px]"}
        flex flex-col gap-4 p-4 transition-all
      `
      }>
      <div className="w-full flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={45} className="rounded-lg hover:bg-neutral-800 p-1"/>
        </button>
        <Image alt="Logo Vopper" src="/img/icon.ico" width={50} height={50} className="absolute left-16"/>
      </div>
      <nav className="flex flex-col gap-4">
        <NavLink href="/" className={`${isMenuOpen ? "p-0 size-[48px] justify-center items-center" : "px-6 py-2.5"}`}>
          <House />
          <span
            className={`${isMenuOpen ? "hidden" : "block"}`}
          >
            Inicio
          </span>
        </NavLink>
        <NavLink href="/plataformas" className={`${isMenuOpen ? "p-0 size-[48px] justify-center items-center" : "px-6 py-2.5"}`}>
          <Box />
          <span
            className={`${isMenuOpen ? "hidden" : "block"}`}
          >
            Plataformas
          </span>
        </NavLink>
        <NavLink href="/cursos" className={`${isMenuOpen ? "p-0 size-[48px] justify-center items-center" : "px-6 py-2.5"}`}>
          <Layers />
          <span
            className={`${isMenuOpen ? "hidden" : "block"}`}
          >
            Cursos
          </span>
        </NavLink>
        <NavLink href="/categorias" className={`${isMenuOpen ? "p-0 size-[48px] justify-center items-center" : "px-6 py-2.5"}`}>
          <FolderOpen />
          <span
            className={`${isMenuOpen ? "hidden" : "block"}`}
          >
            Categorias
          </span>
        </NavLink>
      </nav>
    </aside>
  )
}