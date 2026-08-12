import "./global.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";

const oswald = localFont({
  src: [
    { path: "../../../fonts/oswald/200.woff2", weight: "200", style: "normal" },
    { path: "../../../fonts/oswald/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/oswald/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/oswald/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/oswald/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/oswald/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-oswald",
  display: "swap",
});

const dmSans = localFont({
  src: [
    { path: "../../../fonts/dm-sans/100.woff2", weight: "100", style: "normal" },
    { path: "../../../fonts/dm-sans/200.woff2", weight: "200", style: "normal" },
    { path: "../../../fonts/dm-sans/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/dm-sans/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/dm-sans/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/dm-sans/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/dm-sans/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/dm-sans/800.woff2", weight: "800", style: "normal" },
    { path: "../../../fonts/dm-sans/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Strong-Enerji - Strong Infrastructure, Safe Performance",
  description: "Strong-Enerji Homepage",
};
// test
export default function StrongEnerjiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`strong-enerji-root ${oswald.variable} ${dmSans.variable} bg-white text-gray-900`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
