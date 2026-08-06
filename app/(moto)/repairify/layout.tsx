import type { Metadata } from "next";
import "./global.css";
import { ADLaM_Display, Inter } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext"; // Referencing context setup similar to mannol

const adlam = ADLaM_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-adlam",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
