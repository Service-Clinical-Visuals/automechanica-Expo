import "./global.css";
import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import localFont from "next/font/local";

const sora = localFont({
  src: [
    { path: "../../../fonts/sora/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/sora/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/sora/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/sora/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/sora/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sora",
});

const lato = localFont({
  src: [
    { path: "../../../fonts/lato/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/lato/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/lato/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Tecneco - Advanced Filtration Solutions",
  description: "Tecneco Homepage",
};

export default function TecnecoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`tecneco-root bg-white text-[#191515] ${sora.variable} ${lato.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
