import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const anton = localFont({
  src: [
    { path: "../../../fonts/anton/400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-anton",
  display: "swap",
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
