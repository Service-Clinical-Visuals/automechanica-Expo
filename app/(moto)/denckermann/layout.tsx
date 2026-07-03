import type { Metadata } from "next";
import "./global.css";
import { Oswald, Sora } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Denckermann | A Comprehensive Supplier",
  description: "Denckermann Homepage",
};

export default function DenckermannLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${sora.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
