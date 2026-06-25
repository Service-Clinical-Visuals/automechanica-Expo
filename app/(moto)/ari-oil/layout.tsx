import type { Metadata } from "next";
import { Exo_2, Oswald, Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";


const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ARI OIL",
  description: "Advanced Protection For Every Engine",
  icons: {
    icon: "/tcp-logo.png",
  },
};

export default function AriOilLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${exo2.variable} ${oswald.variable} ${outfit.variable} antialiased ari-oil-root bg-white min-h-screen flex flex-col`}>
      <VideoProvider website="ari-oil">
        {children}
      </VideoProvider>
    </div>
  );
}
