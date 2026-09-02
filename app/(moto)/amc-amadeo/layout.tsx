import type { Metadata } from "next";
import { Oswald, Rubik } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

import "./global.css";

const oswald = Oswald({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-oswald" 
});

const rubik = Rubik({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-rubik" 
});

export const metadata: Metadata = {
  title: "AMC Amadeo",
  description: "Precision-engineered automotive components.",
};

export default function AmcAmadeoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`w-full min-h-screen ${oswald.variable} ${rubik.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
