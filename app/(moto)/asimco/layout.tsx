import "./global.css";
import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import { Teko, Inter } from "next/font/google";

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Asimco - Precision Braking. Trusted Worldwide.",
  description: "Asimco Homepage",
};

export default function AsimcoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`asimco-root ${teko.variable} ${inter.variable} bg-black text-white`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
