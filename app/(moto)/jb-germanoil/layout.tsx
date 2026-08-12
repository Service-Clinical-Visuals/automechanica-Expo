import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const aldrich = localFont({
  src: [
    { path: "../../../fonts/aldrich/400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-aldrich",
  display: "swap",
});

const akshar = localFont({
  src: [
    { path: "../../../fonts/akshar/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/akshar/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/akshar/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/akshar/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/akshar/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-akshar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JB Germanoil | High Performance for Your Engine",
  description: "The high-performance engine oils from JB Germanoil",
};

export default function JbGermanoilLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${aldrich.variable} ${akshar.variable} akshar-font min-h-screen flex flex-col overflow-x-hidden bg-white text-[#1a1a1a]`}>
      <main className="grow">
        <VideoProvider>{children}</VideoProvider>
      </main>
    </div>
  );
}
