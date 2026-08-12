import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
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
  display: "swap",
});

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

export const metadata: Metadata = {
  title: "Bluechem Group",
  description: "Bluechem Group",
};

export default function BluechemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`bluechem-wrapper ${oswald.variable} ${oxanium.variable} min-h-screen antialiased overflow-x-hidden relative w-full`}>
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
