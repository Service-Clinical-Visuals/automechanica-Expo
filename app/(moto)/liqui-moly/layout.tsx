import type { Metadata } from "next";
import "./global.css";
import { Exo } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const exo = Exo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liqui Moly",
  description: "Liqui Moly Homepage",
};

export default function LiquiMolyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${exo.variable} font-sans`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
