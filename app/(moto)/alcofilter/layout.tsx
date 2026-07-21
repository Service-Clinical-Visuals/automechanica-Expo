import type { Metadata } from "next";
import "./global.css";
import { Oswald, Outfit } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alco Filters",
  description: "Alco Filters Homepage",
};

export default function AlcoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${outfit.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
