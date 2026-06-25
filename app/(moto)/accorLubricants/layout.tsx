import type { Metadata } from "next";
import { Oxanium, Exo_2 } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-exo2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ACCOR Lubrifiants",
  description: "ACCOR Lubrifiants Products",
};

export default function AccorLubricantsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`accor-wrapper ${exo2.variable} ${oxanium.variable} min-h-screen bg-white font-sans antialiased overflow-y-hidden relative w-full`}>
      <VideoProvider>
      {children}
      </VideoProvider>
    </div>
  );
}
