import type { Metadata } from "next";
import { Anton, Oswald } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AYD | Driving Automotive Excellence Since 1975",
  description: "Delivering premium steering, suspension, and braking solutions through engineering excellence, advanced manufacturing, and uncompromising quality.",
};

export default function AydotoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${anton.variable} ${oswald.variable} oswald-font min-h-screen flex flex-col overflow-x-hidden bg-white text-[#1a1a1a]`}>
      <main className="grow">
        <VideoProvider>{children}</VideoProvider>
      </main>
    </div>
  );
}
