import type { Metadata } from "next";
import { Chakra_Petch, Oxanium } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra-petch",
  display: "swap",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ardeca Lubricants",
  description: "Ardeca Lubricants - Trusted Belgian-made lubricants",
};

export default function ArdecaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`ardeca-wrapper ${chakraPetch.variable} ${oxanium.variable} min-h-screen   antialiased overflow-y-hidden relative w-full`}>
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
