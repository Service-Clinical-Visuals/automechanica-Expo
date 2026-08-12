import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";

import localFont from "next/font/local";

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

const lato = localFont({
  src: [
    { path: "../../../fonts/lato/100.woff2", weight: "100", style: "normal" },
    { path: "../../../fonts/lato/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/lato/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/lato/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/lato/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meyle",
  description: "",
};

export default function PetrovollLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`magma-root ${oswald.variable} ${lato.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>

      <VideoProvider website="magma-brakes">
        {children}
      </VideoProvider>
    </div>
  );
}
