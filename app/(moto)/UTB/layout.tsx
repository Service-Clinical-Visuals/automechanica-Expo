import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const instrumentSans = localFont({
  src: [
    { path: "../../../fonts/instrument-sans/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/instrument-sans/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/instrument-sans/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/instrument-sans/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-instrument",
  display: "swap",
});



export default function EurolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${instrumentSans.variable} font-instrument antialiased bg-white`}>
      <SmoothAOS />
      <VideoProvider >
        <div className=" overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
