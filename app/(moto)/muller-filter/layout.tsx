import type { Metadata } from "next";
import { Chakra_Petch, Mulish } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import AOSInit from "./_components/AOSInit";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra-petch",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
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
