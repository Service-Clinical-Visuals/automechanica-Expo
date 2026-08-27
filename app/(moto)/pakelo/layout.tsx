import type { Metadata } from "next";
import { Oswald, DM_Sans } from "next/font/google";
import "./global.css";
import React from "react";
import { VideoProvider } from "@/app/_context/VideoContext";

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald',
  weight: ['300', '400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
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
