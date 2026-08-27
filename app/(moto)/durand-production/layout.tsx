import type { Metadata } from "next";
import { Teko, Sora } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Durand Production",
  description: "Durand Production - The Expert Of Automotive Fluids",
};

export default function DurandProductionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`durand-production-wrapper ${teko.variable} ${sora.variable} min-h-screen bg-white font-sans antialiased overflow-y-hidden relative w-full`}>
      <VideoProvider>
      {children}
      </VideoProvider>
    </div>
  );
}
