import type { Metadata } from "next";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import AosInit from "./_components/AosInit";
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

const montserrat = localFont({
  src: [
    { path: "../../../fonts/montserrat/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/montserrat/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/montserrat/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/montserrat/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/montserrat/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Petrovöll | German Lubricants & Chemicals",
  description: "Advanced high performance lubricants for automotive and industrial markets.",
};

export default function PetrovollLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`petrovoll-root ${oswald.variable} ${montserrat.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>
      <AosInit />
      <VideoProvider website="petrovoll">
        {children}
      </VideoProvider>
    </div>
  );
}
