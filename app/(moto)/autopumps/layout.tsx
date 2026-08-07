import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autopumps",
  description: "Autopumps - Advanced Lubrication Solutions",
};

export default function AutopumpsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`autopumps-wrapper ${oswald.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>
       <VideoProvider>
      {children}
      </VideoProvider>
    </div>
  );
}
