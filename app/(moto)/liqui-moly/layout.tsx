import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";

const exo = localFont({
  src: [
    { path: "../../../fonts/exo/100.woff2", weight: "100", style: "normal" },
    { path: "../../../fonts/exo/200.woff2", weight: "200", style: "normal" },
    { path: "../../../fonts/exo/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/exo/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/exo/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/exo/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/exo/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/exo/800.woff2", weight: "800", style: "normal" },
    { path: "../../../fonts/exo/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-exo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liqui Moly",
  description: "Liqui Moly Homepage",
};

export default function LiquiMolyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${exo.variable} font-sans`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
