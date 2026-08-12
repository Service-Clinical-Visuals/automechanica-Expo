import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

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
  title: "Amadini",
  description: "Amadini - Driving Automotive Excellence Since 1961",
};

export default function AmadiniLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`amadini-wrapper ${oswald.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>
       <VideoProvider>
      {children}
      </VideoProvider>
    </div>
  );
}
