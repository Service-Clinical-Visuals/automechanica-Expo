import type { Metadata } from "next";
import "./global.css";
import { Rajdhani, Lato } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "REACH Cooling Group",
  description: "Advanced Thermal Management Solutions",
};

export default function ReachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${rajdhani.variable} ${lato.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
