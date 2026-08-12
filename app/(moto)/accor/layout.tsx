import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const oxanium = localFont({
  src: [
    { path: "../../../fonts/oxanium/200.woff2", weight: "200", style: "normal" },
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

const exo2 = localFont({
  src: [
    { path: "../../../fonts/exo-2/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/exo-2/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/exo-2/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/exo-2/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/exo-2/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/exo-2/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-exo2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ACCOR Lubrifiants",
  description: "ACCOR Lubrifiants Products",
};

export default function AccorLubricantsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`accor-wrapper ${exo2.variable} ${oxanium.variable} min-h-screen bg-white font-sans antialiased overflow-y-hidden relative w-full`}>
      <VideoProvider>
      {children}
      </VideoProvider>
    </div>
  );
}
