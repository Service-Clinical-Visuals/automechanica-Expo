import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";
import localFont from "next/font/local";

const exo2 = localFont({
  src: [
    { path: "../../../fonts/exo-2/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/exo-2/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/exo-2/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/exo-2/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/exo-2/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-exo",
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



export const metadata: Metadata = {
  title: "EFI Aftermarket",
  description: "",
};

export default function EFIAftermarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`efi-aftermarket-root ${exo2.variable} ${poppins.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider >
        {children}
      </VideoProvider>
    </div>
  );
}
