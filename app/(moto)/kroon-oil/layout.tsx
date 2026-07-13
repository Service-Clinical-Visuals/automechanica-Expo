import type { Metadata } from "next";
import { Anton, Oswald } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import AOSInit from "./_components/AOSInit";

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
  title: "Kroon Oil",
  description: "Kroon Oil Official Website",
};

export default function KroonOilLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${anton.variable} ${oswald.variable} kroon-oil-theme font-oswald min-h-screen flex flex-col overflow-x-hidden overflow-y-hidden`}>
      <AOSInit />
      <main className="grow"><VideoProvider>{children}</VideoProvider></main>
    </div>
  );
}
