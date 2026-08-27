import type { Metadata } from "next";
import "./global.css";
import { Poppins, Inter } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "REACH Cooling Group",
  description: "Advanced Thermal Management Solutions",
};

export default function ReachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${poppins.variable} ${inter.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
