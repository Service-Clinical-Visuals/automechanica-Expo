import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "CTR - Steering, Suspension & Brake Systems",
  description: "CTR - High Performance Automotive Components. Steering, Suspension, Brake Pads and Automotive Solutions.",
};

export default function CTRLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="ctr-root min-h-screen bg-white antialiased overflow-x-hidden relative w-full">
      <SmoothAOS />
      <VideoProvider website="ctr">
        {children}
      </VideoProvider>
    </div>
  );
}
