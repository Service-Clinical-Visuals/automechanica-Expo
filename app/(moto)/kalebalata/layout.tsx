import type { Metadata } from "next";
import { Anton, Oswald } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import AOSInit from "../kroon-oil/_components/AOSInit"; // Reuse AOSInit from kroon-oil or create new

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Kale Balata",
  description: "Kale Balata Official Website",
};

export default function KaleBalataLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${anton.variable} ${oswald.variable} kale-balata-theme font-oswald min-h-screen flex flex-col overflow-x-hidden overflow-y-hidden`}>
      <AOSInit />
      <main className="grow"><VideoProvider>{children}</VideoProvider></main>
    </div>
  );
}
