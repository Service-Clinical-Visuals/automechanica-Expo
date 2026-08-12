import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
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

const sora = localFont({
  src: [
    { path: "../../../fonts/sora/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/sora/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/sora/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/sora/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/sora/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Denckermann | A Comprehensive Supplier",
  description: "Denckermann Homepage",
};

export default function DenckermannLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${sora.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
