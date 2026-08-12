import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
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
});

const outfit = localFont({
  src: [
    { path: "../../../fonts/outfit/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/outfit/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/outfit/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/outfit/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/outfit/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-outfit",
});

import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "Eurocams",
  description: "Eurocams manufactures a range of engine components",
  icons: {
    icon: "/tcp-logo.png",
  },
};

export default function EurocamsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${rajdhani.variable} ${outfit.variable} antialiased eurocams-root bg-white min-h-screen flex flex-col font-rajdhani`}>
      <SmoothAOS />
      <VideoProvider >
        {children}
      </VideoProvider>
    </div>
  );
}
