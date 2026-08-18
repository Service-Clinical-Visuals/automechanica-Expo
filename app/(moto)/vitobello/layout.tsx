import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "Walker Products - High-Quality Fuel Delivery & Engine Management Solutions",
  description: "Walker Products, Inc. - Fuel Delivery, Engine Management, Ignition, and Emission Control Solutions",
};

export default function WalkerProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`ampro-root min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider >
        {children}
      </VideoProvider>
    </div>
  );
}
