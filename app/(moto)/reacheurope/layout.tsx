import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";

const rajdhani = localFont({
  src: [
    { path: "../../../fonts/rajdhani/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/rajdhani/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/rajdhani/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/rajdhani/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/rajdhani/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-rajdhani",
  display: "swap",
});

const lato = localFont({
  src: [
    { path: "../../../fonts/lato/100.woff2", weight: "100", style: "normal" },
    { path: "../../../fonts/lato/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/lato/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/lato/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/lato/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-lato",
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
    <div className={`${rajdhani.variable} ${lato.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
