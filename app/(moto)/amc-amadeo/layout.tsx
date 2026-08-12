import type { Metadata } from "next";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";

import "./global.css";

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

const rubik = localFont({
  src: [
    { path: "../../../fonts/rubik/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/rubik/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/rubik/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/rubik/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/rubik/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "AMC Amadeo",
  description: "Precision-engineered automotive components.",
};

export default function AmcAmadeoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`w-full min-h-screen ${oswald.variable} ${rubik.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
