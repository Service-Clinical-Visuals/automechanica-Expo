import "./global.css";
import React from "react";
import { VideoProvider } from "@/app/_context/VideoContext";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
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
