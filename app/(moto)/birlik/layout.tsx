import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";

const sora = localFont({
  src: [
    { path: "../../../fonts/sora/100.woff2", weight: "100", style: "normal" },
    { path: "../../../fonts/sora/200.woff2", weight: "200", style: "normal" },
    { path: "../../../fonts/sora/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/sora/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/sora/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/sora/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/sora/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/sora/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-sora",
  display: "swap",
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
  display: "swap",
});

export const metadata: Metadata = {
  title: "Birlik Conta",
  description: "Birlik Conta Official Website",
};

export default function BirlikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${sora.variable} ${manrope.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
