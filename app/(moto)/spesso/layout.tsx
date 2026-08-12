import React from "react";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import localFont from "next/font/local";

const anton = localFont({
  src: [
    { path: "../../../fonts/anton/400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-anton",
});

const overpass = localFont({
  src: [
    { path: "../../../fonts/overpass/400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-overpass",
});

export const metadata = {
  title: "Spesso - Engineering Trusted Gasket Solutions Since 1926",
  description: "Delivering premium flat gaskets and gasket sets for OEM and aftermarket applications.",
};

export default function SpessoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`font-sans ${anton.variable} ${overpass.variable}`}>
     <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
