import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frenos Sauleda",
  description: "Frenos Sauleda Products",
};

export default function FrenosSauledaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`frenos-sauleda-wrapper ${sora.variable} ${inter.variable} min-h-screen bg-white font-sans antialiased overflow-y-hidden relative w-full`}>
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
