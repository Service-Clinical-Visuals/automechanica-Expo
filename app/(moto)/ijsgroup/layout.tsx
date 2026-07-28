import type { Metadata } from "next";
import "./global.css";
import { Oswald, Sora, Open_Sans } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "I.J.S. Group Original Parts",
  description: "First Spanish manufacturer of automobile alternator pulleys and crankshaft pulleys",
};

export default function IjsGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${sora.variable} ${openSans.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
