import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";
import { Iceland, Urbanist } from "next/font/google";

const iceland = Iceland({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-iceland",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
});



export const metadata: Metadata = {
  title: "Tesla",
  description: "",
};

export default function TeslaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`tesla-root ${iceland.variable} ${urbanist.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider >
        {children}
      </VideoProvider>
    </div>
  );
}
