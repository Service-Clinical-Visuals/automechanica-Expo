import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import AOSInit from "../kroon-oil/_components/AOSInit"; // Reuse AOSInit from kroon-oil or create new

const anton = localFont({
  src: [
    { path: "../../../fonts/anton/400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-anton",
});

const oswald = localFont({
  src: [
    { path: "../../../fonts/oswald/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/oswald/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/oswald/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/oswald/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/oswald/700.woff2", weight: "700", style: "normal" },
  ],
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
