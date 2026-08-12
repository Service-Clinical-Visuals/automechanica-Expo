import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const orbitron = localFont({
  src: [
    { path: "../../../fonts/orbitron/400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-orbitron",
});

const manrope = localFont({
  src: [
    { path: "../../../fonts/manrope/200.woff2", weight: "200", style: "normal" },
    { path: "../../../fonts/manrope/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/manrope/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/manrope/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/manrope/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/manrope/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/manrope/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-manrope",
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
