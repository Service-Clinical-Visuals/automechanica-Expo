import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
