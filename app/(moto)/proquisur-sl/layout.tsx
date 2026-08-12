import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
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
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "../../../fonts/inter/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/inter/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/inter/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/inter/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/inter/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/inter/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const nunito = localFont({
  src: [
    { path: "../../../fonts/nunito/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/nunito/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/nunito/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/nunito/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/nunito/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sigam Marmitte",
  description: "Excellence in Industrial Emission Control",
};

export default function SigamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${manrope.variable} ${inter.variable} ${nunito.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
