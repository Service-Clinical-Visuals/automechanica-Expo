import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";


const bebasNeue = localFont({
  src: [
    { path: "../../../fonts/bebas-neue/400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-bebas",
  display: "swap",
});

const poppins = localFont({
  src: [
    { path: "../../../fonts/poppins/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/poppins/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/poppins/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/poppins/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/poppins/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export default function SliderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${poppins.variable} ${bebasNeue.variable} font-poppins antialiased bg-white slider-root`}>
      <AosInit />
      <VideoProvider website="slider">
        <div className=" overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
