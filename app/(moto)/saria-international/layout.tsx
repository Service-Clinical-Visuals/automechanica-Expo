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
  title: "Saria International",
  description: "Premium Lubricants for Every Journey",
};

export default function SariaInternationalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${lato.variable} bg-[#111624] min-h-screen text-[#ffffff]`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
