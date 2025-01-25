import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Aside from "@/components/Aside";
import { Search } from "lucide-react";
import Donation from "@/components/Donation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vopper Academy",
  description: "Aprende a tu ritmo con los mejores cursos de programación.",
  icons: "/img/icon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const handleDonation = () => {
    alert("Gracias por tu donación, ahora podremos comprar más café");
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
          grid grid-cols-[auto_1fr] grid-rows-[100dvh] size-full relative z-0
        `}
      >
        {/* <Donation /> */}
        <Aside />
        <main className="flex flex-col items-center p-8 gap-8 overflow-hidden">
          <div className="relative flex items-center">
            <Search strokeWidth={1} size={20} className="absolute left-2" />
            <input
              type="text"
              placeholder="¿Qué Deseas Aprender Hoy?"
              className="bg-transparent border-2 border-neutral-600 rounded-lg pl-8 pr-2 py-1.5 w-[800px]"
            />
          </div>
          {/* <hr className="border w-full -mb-8"/> */}
          {/* <section className="size-full border overflow-hidden"> */}
            {children}
          {/* </section> */}
        </main>
      </body>
    </html>
  );
}
