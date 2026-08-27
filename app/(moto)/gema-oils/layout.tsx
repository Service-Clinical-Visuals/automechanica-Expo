import type { Metadata } from "next";
import "./global.css";
import { Nunito, Lato, Rubik, Source_Sans_3 } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
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
