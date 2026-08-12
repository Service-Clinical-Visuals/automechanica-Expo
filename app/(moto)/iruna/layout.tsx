import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";

const oxanium = localFont({
  src: [
    { path: "../../../fonts/oxanium/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/oxanium/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/oxanium/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/oxanium/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/oxanium/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/oxanium/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-oxanium",
  display: "swap",
});

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

export const metadata: Metadata = {
  title: "Iruna | Secure, optimised feel",
  description: "Iruna Homepage",
};

export default function IrunaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oxanium.variable} ${sora.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
