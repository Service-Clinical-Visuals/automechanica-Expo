import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import React from "react";
import { VideoProvider } from "@/app/_context/VideoContext";

const oswald = localFont({
  src: [
    { path: "../../../fonts/oswald/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/oswald/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/oswald/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/oswald/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/oswald/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-oswald",
});

const dmSans = localFont({
  src: [
    { path: "../../../fonts/dm-sans/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/dm-sans/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/dm-sans/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Pakelo Lubricants",
  description: "Pakelo Lubricants - Find our Engine Oil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${oswald.variable} ${dmSans.variable} font-dm-sans antialiased text-[#121C22] bg-[#000033] min-h-screen relative w-full`}>
      <VideoProvider> {children}</VideoProvider>
    </div>
  );
}
