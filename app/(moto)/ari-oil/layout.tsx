import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";


const exo2 = localFont({
  src: [
    { path: "../../../fonts/exo-2/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/exo-2/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/exo-2/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/exo-2/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/exo-2/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-exo2",
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
});

const outfit = localFont({
  src: [
    { path: "../../../fonts/outfit/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/outfit/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/outfit/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/outfit/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/outfit/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "ARI OIL",
  description: "Advanced Protection For Every Engine",
  icons: {
    icon: "/tcp-logo.png",
  },
};

export default function AriOilLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${exo2.variable} ${oswald.variable} ${outfit.variable} antialiased ari-oil-root bg-white min-h-screen flex flex-col`}>
      <VideoProvider website="ari-oil">
        {children}
      </VideoProvider>
    </div>
  );
}
