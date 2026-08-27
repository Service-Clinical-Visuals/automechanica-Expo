import type { Metadata } from "next";
import "./global.css";
import { Oswald, Lato } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoPart Battery - Reliable Battery Solutions",
  description: "Powering Every Journey with Reliable Battery Solutions",
};

export default function AutoPartBatteryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${lato.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
