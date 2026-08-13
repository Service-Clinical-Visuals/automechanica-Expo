import React from "react";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import { Anton, Overpass } from 'next/font/google';

const anton = Anton({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

const overpass = Overpass({
  subsets: ['latin'],
  variable: '--font-overpass',
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
