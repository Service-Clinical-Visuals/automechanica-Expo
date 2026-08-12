import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const sora = localFont({
  src: [
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

export const metadata: Metadata = {
  title: "Frenos Sauleda",
  description: "Frenos Sauleda Products",
};

export default function FrenosSauledaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`frenos-sauleda-wrapper ${sora.variable} ${inter.variable} min-h-screen bg-white font-sans antialiased overflow-y-hidden relative w-full`}>
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
