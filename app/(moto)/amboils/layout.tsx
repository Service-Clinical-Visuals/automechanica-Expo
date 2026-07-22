import type { Metadata } from "next";
import "./global.css";
import { Teko, Oswald } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AMB Oils",
  description: "Engineered for Every Engine, Trusted in Every Drop",
};

export default function AmboilsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${teko.variable} ${oswald.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
