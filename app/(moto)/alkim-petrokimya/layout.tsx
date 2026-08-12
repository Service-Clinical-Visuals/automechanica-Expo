import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";

const orbitron = localFont({
  src: [
    { path: "../../../fonts/orbitron/400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-orbitron",
  display: "swap",
});

const dmsans = localFont({
  src: [
    { path: "../../../fonts/dm-sans/100.woff2", weight: "100", style: "normal" },
    { path: "../../../fonts/dm-sans/200.woff2", weight: "200", style: "normal" },
    { path: "../../../fonts/dm-sans/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/dm-sans/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/dm-sans/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/dm-sans/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/dm-sans/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/dm-sans/800.woff2", weight: "800", style: "normal" },
    { path: "../../../fonts/dm-sans/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-dmsans",
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
    <div className={`${orbitron.variable} ${dmsans.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
