import type { Metadata } from "next";
import { Rajdhani, Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "EXOL",
  description: "Exol manufactures a range of lubricants and associated products",
  icons: {
    icon: "/tcp-logo.png",
  },
};

export default function ExolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${rajdhani.variable} ${outfit.variable} antialiased exol-root bg-white min-h-screen flex flex-col font-rajdhani`}>
      <SmoothAOS />
      <VideoProvider website="exol">
        {children}
      </VideoProvider>
    </div>
  );
}
