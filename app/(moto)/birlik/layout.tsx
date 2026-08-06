import type { Metadata } from "next";
import "./global.css";
import { Sora, Manrope } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Birlik Conta",
  description: "Birlik Conta Official Website",
};

export default function BirlikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${sora.variable} ${manrope.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
