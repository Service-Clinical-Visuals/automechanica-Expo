import type { Metadata } from "next";
import { Oswald, Oxanium } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bluechem Group",
  description: "Bluechem Group",
};

export default function BluechemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`bluechem-wrapper ${oswald.variable} ${oxanium.variable} min-h-screen antialiased overflow-x-hidden relative w-full`}>
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
