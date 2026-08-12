import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontHeading = localFont({
  src: [
    { path: "../../../fonts/goldman/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/goldman/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-goldman",
  display: "swap",
  adjustFontFallback: false,
});

const fontBody = localFont({
  src: [
    { path: "../../../fonts/albert-sans/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/albert-sans/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/albert-sans/600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-albert",
  display: "swap",
  adjustFontFallback: false,
});



export default function EurolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} antialiased bg-white`}>
      <AosInit />
      <VideoProvider >
        <div className=" overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
