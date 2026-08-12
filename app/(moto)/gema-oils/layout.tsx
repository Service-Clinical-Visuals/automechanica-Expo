import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";

const nunito = localFont({
  src: [
    { path: "../../../fonts/nunito/200.woff2", weight: "200", style: "normal" },
    { path: "../../../fonts/nunito/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/nunito/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/nunito/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/nunito/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/nunito/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/nunito/800.woff2", weight: "800", style: "normal" },
    { path: "../../../fonts/nunito/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-nunito",
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

const rubik = localFont({
  src: [
    { path: "../../../fonts/rubik/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/rubik/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/rubik/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/rubik/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/rubik/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/rubik/800.woff2", weight: "800", style: "normal" },
    { path: "../../../fonts/rubik/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-rubik",
  display: "swap",
});

const sourceSans3 = localFont({
  src: [
    { path: "../../../fonts/source-sans-3/200.woff2", weight: "200", style: "normal" },
    { path: "../../../fonts/source-sans-3/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/source-sans-3/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/source-sans-3/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/source-sans-3/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/source-sans-3/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/source-sans-3/800.woff2", weight: "800", style: "normal" },
    { path: "../../../fonts/source-sans-3/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GEMAOIL",
  description: "Maximum Performance, Perfect Protection",
};

export default function SigamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${nunito.variable} ${lato.variable} ${rubik.variable} ${sourceSans3.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
