import "./global.css";
import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import localFont from "next/font/local";

const teko = localFont({
  src: [
    { path: "../../../fonts/teko/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/teko/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/teko/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/teko/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/teko/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-teko",
});

const inter = localFont({
  src: [
    { path: "../../../fonts/inter/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/inter/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/inter/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/inter/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/inter/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Asimco - Precision Braking. Trusted Worldwide.",
  description: "Asimco Homepage",
};

export default function AsimcoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`asimco-root ${teko.variable} ${inter.variable} bg-black text-white`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
