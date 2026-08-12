import "./global.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";

const inter = localFont({
  src: [
    { path: "../../../fonts/inter/100.woff2", weight: "100", style: "normal" },
    { path: "../../../fonts/inter/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/inter/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/inter/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/inter/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/inter/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/inter/800.woff2", weight: "800", style: "normal" },
    { path: "../../../fonts/inter/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-inter",
});
const nunito = localFont({
  src: [
    { path: "../../../fonts/nunito/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/nunito/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Cardyfren - Precision CV Joints",
  description: "Precision CV Joints Engineered for Every Drive",
};

export default function CardyfrenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${nunito.variable} cardyfren-root bg-black text-white`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
