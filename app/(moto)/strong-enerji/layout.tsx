import "./global.css";
import type { Metadata } from "next";
import { Oswald, DM_Sans } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Strong-Enerji - Strong Infrastructure, Safe Performance",
  description: "Strong-Enerji Homepage",
};
// test
export default function StrongEnerjiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`strong-enerji-root ${oswald.variable} ${dmSans.variable} bg-white text-gray-900`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
