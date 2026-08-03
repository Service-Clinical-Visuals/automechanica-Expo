import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "Temel Conta - High Performance Gasket Solutions",
  description: "Temel Conta - Türkiye’s Pioneer in Gasket Manufacturing. High Performance Gasket Solutions for Reliable Engine Sealing.",
};

export default function TemelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="temel-root min-h-screen bg-white antialiased overflow-x-hidden relative w-full">
      <SmoothAOS />
      <VideoProvider website="temel">
        {children}
      </VideoProvider>
    </div>
  );
}
