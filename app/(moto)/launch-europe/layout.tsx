import "./global.css";
import React from "react";
import { VideoProvider } from "@/app/_context/VideoContext";
import localFont from "next/font/local";

const lato = localFont({
  src: [
    { path: "../../../fonts/lato/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/lato/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/lato/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/lato/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-lato",
});


export const metadata = {
  title: "Launch Europe",
  description: "Precision Diagnostics. Smarter Workshops.",
};

export default function LaunchEuropeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider>
      <div 
        className={`${lato.variable} font-lato bg-white text-[#1a1a1a] min-h-screen`}
        style={{ "--font-arial": "'Arial Rounded MT Bold', Arial, sans-serif" } as React.CSSProperties}
      >
        {children}
      </div>
    </VideoProvider>
  );
}
