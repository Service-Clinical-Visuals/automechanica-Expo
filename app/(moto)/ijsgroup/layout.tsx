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

const sora = localFont({
  src: [
    { path: "../../../fonts/sora/100.woff2", weight: "100", style: "normal" },
    { path: "../../../fonts/sora/200.woff2", weight: "200", style: "normal" },
    { path: "../../../fonts/sora/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/sora/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/sora/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/sora/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/sora/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/sora/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-sora",
  display: "swap",
});

const openSans = localFont({
  src: [
    { path: "../../../fonts/open-sans/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/open-sans/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/open-sans/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/open-sans/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/open-sans/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/open-sans/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "I.J.S. Group Original Parts",
  description: "First Spanish manufacturer of automobile alternator pulleys and crankshaft pulleys",
};

export default function IjsGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${sora.variable} ${openSans.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
