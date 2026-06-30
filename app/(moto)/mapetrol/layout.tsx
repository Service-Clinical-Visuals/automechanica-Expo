import type { Metadata } from "next";
import { Orbitron, Manrope } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "MAPETROL",
  description: "Mapetrol Premium Lubricants",
  icons: {
    icon: "/tcp-logo.png",
  },
};

export default function MapetrolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${orbitron.variable} ${manrope.variable} antialiased mapetrol-root bg-white min-h-screen flex flex-col font-manrope`}>
      <SmoothAOS />
      <VideoProvider >
        {children}
      </VideoProvider>
    </div>
  );
}
