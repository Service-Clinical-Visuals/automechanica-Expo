import type { Metadata } from "next";
import "./global.css";
import { Orbitron, DM_Sans } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sigam Marmitte",
  description: "Excellence in Industrial Emission Control",
};

export default function SigamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${orbitron.variable} ${dmsans.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
