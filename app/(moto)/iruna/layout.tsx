import type { Metadata } from "next";
import "./global.css";
import { Oxanium, Sora } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iruna | Secure, optimised feel",
  description: "Iruna Homepage",
};

export default function IrunaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oxanium.variable} ${sora.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
