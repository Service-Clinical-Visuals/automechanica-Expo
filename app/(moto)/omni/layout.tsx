import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const bebasNeue = localFont({
  src: [
    { path: "../../../fonts/bebas-neue/400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-bebas-neue",
  display: "swap",
});

const exo2 = localFont({
  src: [
    { path: "../../../fonts/exo-2/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/exo-2/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/exo-2/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/exo-2/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/exo-2/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/exo-2/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-exo-2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omni Specialty Packaging, LLC",
  description: "Omni Specialty Packaging, LLC",
};

export default function OmniLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`omni-wrapper ${exo2.variable} ${bebasNeue.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>
       <VideoProvider>
      {children}
      </VideoProvider>
    </div>
  );
}
