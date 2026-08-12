import localFont from "next/font/local";
import "./global.css";
import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";

const manrope = localFont({
  src: [
    { path: "../../../fonts/manrope/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/manrope/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/manrope/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/manrope/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/manrope/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-manrope",
});

const inter = localFont({
  src: [
    { path: "../../../fonts/inter/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/inter/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/inter/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/inter/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aisin - Advanced Automotive Engineering Solutions",
  description: "Aisin Homepage",
};

export default function AisinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`aisin-root ${manrope.variable} ${inter.variable} bg-white text-gray-900`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
