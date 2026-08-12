import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import AOSInit from "./_components/AOSInit";

const chakraPetch = localFont({
  src: [
    { path: "../../../fonts/chakra-petch/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/chakra-petch/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/chakra-petch/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/chakra-petch/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/chakra-petch/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-chakra-petch",
});

const mulish = localFont({
  src: [
    { path: "../../../fonts/mulish/200.woff2", weight: "200", style: "normal" },
    { path: "../../../fonts/mulish/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/mulish/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/mulish/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/mulish/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/mulish/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/mulish/800.woff2", weight: "800", style: "normal" },
    { path: "../../../fonts/mulish/900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "Muller Filter",
  description: "Muller Filter Official Website",
};

export default function MullerFilterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${chakraPetch.variable} ${mulish.variable} muller-filter-theme font-mulish  min-h-screen flex flex-col overflow-x-hidden overflow-y-hidden`}>
      <AOSInit />
      <main className="grow"> <VideoProvider>{children}</VideoProvider></main>
    </div>
  );
}
