import type { Metadata } from "next";
import { Aldrich, Akshar } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const aldrich = Aldrich({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-aldrich",
  display: "swap",
});

const akshar = Akshar({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
