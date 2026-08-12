import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";

const odibeeSans = localFont({
  src: [
    { path: "../../../fonts/odibee-sans/400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-odibee-sans",
  display: "swap",
});

const instrumentSans = localFont({
  src: [
    { path: "../../../fonts/instrument-sans/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/instrument-sans/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/instrument-sans/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/instrument-sans/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barox Oil",
  description: "Power Up with Barox",
};

export default function BaroxOilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${odibeeSans.variable} ${instrumentSans.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
