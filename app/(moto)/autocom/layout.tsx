import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "Autocom",
  description: "Autocom",
};

export default function AutocomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`autocom-root min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider >
        {children}
      </VideoProvider>
    </div>
  );
}
