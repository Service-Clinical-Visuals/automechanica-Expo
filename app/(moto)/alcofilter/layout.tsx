import type { Metadata } from "next";
import "./global.css";
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

const outfit = localFont({
  src: [
    { path: "../../../fonts/outfit/100.woff2", weight: "100", style: "normal" },
    { path: "../../../fonts/outfit/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/outfit/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/outfit/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/outfit/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/outfit/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/outfit/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alco Filters",
  description: "Alco Filters Homepage",
};

export default function AlcoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${outfit.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
