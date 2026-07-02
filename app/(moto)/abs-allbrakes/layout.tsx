import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";

import { Oswald, Teko } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magma Brakes | High Performance Brake Systems",
  description: "Advanced high performance brake systems for automotive and industrial markets.",
};

export default function PetrovollLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`magma-root ${oswald.variable} ${teko.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>

      <VideoProvider website="magma-brakes">
        {children}
      </VideoProvider>
    </div>
  );
}
