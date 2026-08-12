import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";

import localFont from "next/font/local";

const oswald = localFont({
  src: [
    { path: "../../../fonts/oswald/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/oswald/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/oswald/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/oswald/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/oswald/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-oswald",
  display: "swap",
});

const teko = localFont({
  src: [
    { path: "../../../fonts/teko/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/teko/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/teko/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/teko/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/teko/700.woff2", weight: "700", style: "normal" },
  ],
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
    <div className={`abs-root ${oswald.variable} ${teko.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>

      <VideoProvider >
        {children}
      </VideoProvider>
    </div>
  );
}
