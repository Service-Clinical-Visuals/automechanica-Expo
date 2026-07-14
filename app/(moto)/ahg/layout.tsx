import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import AOSInit from "./_components/AOSInit";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "AHG Autoteile GmbH",
  description: "AHG Official Website",
};

export default function AHGLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${oswald.variable} ahg-theme font-oswald min-h-screen flex flex-col overflow-x-hidden overflow-y-hidden`}>
      <AOSInit />
      <main className="grow"><VideoProvider>{children}</VideoProvider></main>
    </div>
  );
}
