import "./global.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const nunito = Nunito({ 
  subsets: ["latin"], 
  weight: ["700", "800"],
  variable: "--font-nunito" 
});

export const metadata: Metadata = {
  title: "Cardyfren - Precision CV Joints",
  description: "Precision CV Joints Engineered for Every Drive",
};

export default function CardyfrenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${nunito.variable} cardyfren-root bg-black text-white`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
