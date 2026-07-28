import type { Metadata } from "next";
import "./global.css";
import { Oswald, Rubik } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yavuzsan Otomotiv",
  description: "Excellence in Automotive Spare Parts and Solutions",
};

export default function YavuzsanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${rubik.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
