import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontHeading = localFont({
  src: [
    { path: "../../../fonts/exo-2/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/exo-2/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/exo-2/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/exo-2/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/exo-2/800.woff2", weight: "800", style: "normal" },
    { path: "../../../fonts/exo-2/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-exo-2",
  display: "swap",
});

const fontBody = localFont({
  src: [
    { path: "../../../fonts/poppins/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/poppins/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/poppins/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/poppins/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/poppins/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/poppins/800.woff2", weight: "800", style: "normal" },
    { path: "../../../fonts/poppins/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "K2 | Car Cosmetics, Oils and Automotive Chemicals",
  description: "Explore the wide range of professional K2 automotive chemicals, detailing cosmetics, and high-performance TEXAR lubricants manufactured by Melle.",
};

export default function MelleSpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} antialiased bg-white`}>
      <AosInit />
      <VideoProvider website="melle-sp">
        <div className="melle-root overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
