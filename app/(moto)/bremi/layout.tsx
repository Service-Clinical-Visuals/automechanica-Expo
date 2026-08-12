import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";
import { VideoProvider } from "@/app/_context/VideoContext";

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

const oxanium = localFont({
  src: [
    { path: "../../../fonts/oxanium/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/oxanium/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/oxanium/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/oxanium/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/oxanium/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/oxanium/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-oxanium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bremi | 100 Years of Car Systems",
  description: "Trusted For Nearly 100 Years, BREMI Offers Over 7,500 Premium Aftermarket Automotive Products",
};

export default function BremiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${oxanium.variable} font-sans`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
