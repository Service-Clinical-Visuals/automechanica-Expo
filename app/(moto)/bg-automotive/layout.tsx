import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";

const montserrat = localFont({
  src: [
    { path: "../../../fonts/montserrat/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/montserrat/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/montserrat/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/montserrat/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/montserrat/800.woff2", weight: "800", style: "normal" },
    { path: "../../../fonts/montserrat/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

const opensans = localFont({
  src: [
    { path: "../../../fonts/open-sans/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/open-sans/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/open-sans/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/open-sans/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/open-sans/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/open-sans/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-opensans",
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
    <div className={`${montserrat.variable} ${opensans.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
