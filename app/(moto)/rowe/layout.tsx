import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const orbitron = localFont({
  src: [
    { path: "../../../fonts/orbitron/400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-orbitron",
  display: "swap",
});

const dmSans = localFont({
  src: [
    { path: "../../../fonts/dm-sans/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/dm-sans/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/dm-sans/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/dm-sans/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/dm-sans/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/dm-sans/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ROWE",
  description: "ROWE Oil Products",
};

export default function RoweLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`rowe-wrapper ${dmSans.variable} ${orbitron.variable} min-h-screen bg-white font-sans antialiased overflow-y-hidden relative w-full`}>
      <VideoProvider>
      {children}
      </VideoProvider>
    </div>
  );
}
