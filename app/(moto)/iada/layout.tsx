import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const amaranth = localFont({
  src: [
    { path: "../../../fonts/amaranth/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/amaranth/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-amaranth",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IADA Car Chemicals",
  description: "More than 60 years manufacturing chemicals for car maintenance and care.",
};

export default function IadaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`iada-wrapper ${amaranth.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>
       <VideoProvider>
      {children}
      </VideoProvider>
    </div>
  );
}
