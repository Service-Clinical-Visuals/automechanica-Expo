import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontHeading = localFont({
  src: [
    { path: "../../../fonts/bebas-neue/400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-bebas",
  display: "swap",
  adjustFontFallback: false,
});

const fontBody = localFont({
  src: [
    { path: "../../../fonts/exo-2/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/exo-2/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/exo-2/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/exo-2/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-exo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "emka",
  description: "Endorsed by leading automotive manufacturers worldwide. Explore our high-performance engine oils and lubricants.",
  icons: {
    icon: "/moto/veedol-moto/logo 1.png",
  },
};

export default function VeedolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} antialiased bg-white`}>
      <AosInit />
      <VideoProvider website="emka">
        <div className="emka-root overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
