import { House, Box, Layers, FolderOpen } from "lucide-react";
import NavLink from "./ui/NavLink";

export default function Aside() {
  return (
    <aside className="h-screen flex flex-col gap-4 p-4">
      <div className="w-full">
        
      </div>
      <nav className="flex flex-col gap-4">
        <NavLink href="/">
          <House />
          Home
        </NavLink>
        <NavLink href="/plataformas">
          <Box />
          Plataformas
        </NavLink>
        <NavLink href="/cursos">
          <Layers />
          Cursos
        </NavLink>
        <NavLink href="/categorias">
          <FolderOpen />
          Categorias
        </NavLink>
      </nav>
    </aside>
  )
}