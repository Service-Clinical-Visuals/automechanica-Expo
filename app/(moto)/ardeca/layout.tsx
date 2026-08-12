import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const chakraPetch = localFont({
  src: [
    { path: "../../../fonts/chakra-petch/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/chakra-petch/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/chakra-petch/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/chakra-petch/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/chakra-petch/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-chakra-petch",
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
  title: "Ardeca Lubricants",
  description: "Ardeca Lubricants - Trusted Belgian-made lubricants",
};

export default function ArdecaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`ardeca-wrapper ${chakraPetch.variable} ${oxanium.variable} min-h-screen   antialiased overflow-y-hidden relative w-full`}>
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
