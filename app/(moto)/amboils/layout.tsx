import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";

const teko = localFont({
  src: [
    { path: "../../../fonts/teko/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/teko/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/teko/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/teko/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/teko/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-teko",
  display: "swap",
});

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

export const metadata: Metadata = {
  title: "AMB Oils",
  description: "Engineered for Every Engine, Trusted in Every Drop",
};

export default function AmboilsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${teko.variable} ${oswald.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
