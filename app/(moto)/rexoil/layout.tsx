import type { Metadata } from "next";
import "./global.css";
import { Exo_2, Niramit } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";


const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-exo2",
  display: "swap",
});

const niramit = Niramit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-niramit",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Rexoil | Powering Performance",
  description: "Rexoil Lubrication Solutions",
};

export default function RexoilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${exo2.variable} ${niramit.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
