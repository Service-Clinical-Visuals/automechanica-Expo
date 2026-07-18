import type { Metadata } from "next";
import "./global.css";
import { Oswald, Oxanium } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bremi | 100 Years of Car Systems",
  description: "Trusted For Nearly 100 Years, BREMI Offers Over 7,500 Premium Aftermarket Automotive Products",
};

export default function BremiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${oxanium.variable} font-sans`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
