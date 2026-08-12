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

const poppins = localFont({
  src: [
    { path: "../../../fonts/poppins/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/poppins/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/poppins/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/poppins/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/poppins/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MANNOL Lubricants",
  description: "MANNOL Premium Lubricants",
};

export default function MannolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${sora.variable} ${poppins.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
