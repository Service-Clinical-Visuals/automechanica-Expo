import type { Metadata } from "next";
import { Exo_2, Poppins } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontHeading = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-exo-2",
  display: "swap",
});

const fontBody = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "K2 | Car Cosmetics, Oils and Automotive Chemicals",
  description: "Explore the wide range of professional K2 automotive chemicals, detailing cosmetics, and high-performance TEXAR lubricants manufactured by Melle.",
};

export default function MelleSpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} antialiased bg-white`}>
      <AosInit />
      <VideoProvider website="melle-sp">
        <div className="melle-root overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
