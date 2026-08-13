import type { Metadata } from "next";
import "./global.css";
import { Roboto, Outfit } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEGER",
  description: "Advanced Thermal Management Solutions",
};

export default function ReachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${roboto.variable} ${outfit.variable} font-outfit`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
