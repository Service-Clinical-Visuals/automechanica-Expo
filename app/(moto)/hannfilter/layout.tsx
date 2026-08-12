import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";
import localFont from "next/font/local";

const dmsans = localFont({
  src: [
    { path: "../../../fonts/dm-sans/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/dm-sans/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/dm-sans/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-dmsans",
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
  title: "Ampro",
  description: "Ampro Automotive Parts",
};

export default function AmproLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`ampro-root ${dmsans.variable} ${teko.variable} min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider >
        {children}
      </VideoProvider>
    </div>
  );
}
