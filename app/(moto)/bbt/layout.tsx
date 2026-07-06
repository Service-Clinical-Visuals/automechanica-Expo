import type { Metadata } from "next";
import "./globals.css";
import { Oswald, Lato } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BBT | Automotive Components GmbH",
  description: "BBT Homepage",
};

export default function BBTLayout({
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
