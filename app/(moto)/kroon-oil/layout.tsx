import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import AOSInit from "./_components/AOSInit";

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
