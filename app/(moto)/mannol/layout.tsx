import type { Metadata } from "next";
import "./global.css";
import { Sora, Poppins } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MANNOL Lubricants",
  description: "MANNOL Premium Lubricants",
};

export default function MannolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${sora.variable} ${poppins.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
