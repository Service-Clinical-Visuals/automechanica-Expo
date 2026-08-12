import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";


const exo2 = localFont({
  src: [
    { path: "../../../fonts/exo-2/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/exo-2/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/exo-2/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/exo-2/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/exo-2/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/exo-2/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-exo2",
  display: "swap",
});

const niramit = localFont({
  src: [
    { path: "../../../fonts/niramit/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/niramit/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/niramit/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/niramit/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/niramit/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-niramit",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Rexoil | Powering Performance",
  description: "Rexoil Lubrication Solutions",
};

export default function RexoilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${exo2.variable} ${niramit.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
