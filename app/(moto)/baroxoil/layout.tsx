import type { Metadata } from "next";
import "./global.css";
import { Odibee_Sans, Instrument_Sans } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const odibeeSans = Odibee_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-odibee-sans",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barox Oil",
  description: "Power Up with Barox",
};

export default function BaroxOilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${odibeeSans.variable} ${instrumentSans.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
