import type { Metadata } from "next";
import "./global.css";
import { Manrope, Inter, Nunito } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sigam Marmitte",
  description: "Excellence in Industrial Emission Control",
};

export default function SigamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${manrope.variable} ${inter.variable} ${nunito.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
