import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "Airstal",
  description: "Airstal Automotive Parts",
};

export default function AirstalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`airstal-root min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider >
        {children}
      </VideoProvider>
    </div>
  );
}
