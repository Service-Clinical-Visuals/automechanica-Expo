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

const lato = localFont({
  src: [
    { path: "../../../fonts/lato/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/lato/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/lato/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saria International",
  description: "Premium Lubricants for Every Journey",
};

export default function SariaInternationalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${lato.variable} bg-[#111624] min-h-screen text-[#ffffff]`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
