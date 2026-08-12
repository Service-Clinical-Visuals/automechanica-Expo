import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";

const sora = localFont({
  src: [
    { path: "../../../fonts/sora/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/sora/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/sora/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/sora/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/sora/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sora",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "../../../fonts/inter/100.woff2", weight: "100", style: "normal" },
    { path: "../../../fonts/inter/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/inter/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/inter/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/inter/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "REACH Cooling Group",
  description: "Advanced Thermal Management Solutions",
};

export default function ReachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${sora.variable} ${inter.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
