import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";
import localFont from "next/font/local";

const iceland = localFont({
  src: [
    { path: "../../../fonts/iceland/400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-iceland",
  display: "swap",
});

const urbanist = localFont({
  src: [
    { path: "../../../fonts/urbanist/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/urbanist/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/urbanist/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/urbanist/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/urbanist/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-urbanist",
  display: "swap",
});



export const metadata: Metadata = {
  title: "Tesla",
  description: "",
};

export default function TeslaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`tesla-root ${iceland.variable} ${urbanist.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider >
        {children}
      </VideoProvider>
    </div>
  );
}
