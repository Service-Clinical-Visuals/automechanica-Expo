import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext"; // Referencing context setup similar to mannol

const adlam = localFont({
  src: [
    { path: "../../../fonts/adlam-display/400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-adlam",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "../../../fonts/inter/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/inter/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/inter/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/inter/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/inter/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Repairify - Precision ADAS Calibration",
  description: "Precision ADAS Calibration for the Next Generation of Vehicle Safety",
};

export default function RepairifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${adlam.variable} ${inter.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
