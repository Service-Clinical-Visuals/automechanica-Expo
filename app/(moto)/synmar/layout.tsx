import type { Metadata } from "next";
import { BBH_Bogle, Oswald, Teko } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontPrimary = BBH_Bogle({
  variable: "--font-bbhbogle",
  subsets: ["latin"],
  weight: ["400"],
});

const fontSecondary = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const fontTertiary = Teko({
  variable: "--font-teko",  
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Synmar",
  description: "Synmar is a dynamic young Dutch company specialising in high-quality lubricants and technical fluids. From our modern production facility in Lichtenvoorde we serve international markets. Relying on many years of experience, we develop and manufacture all our products entirely in the Netherlands—something we’re proud of, which is why our packaging is marked  “Made in Holland”.",
};

export default function SynmarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontPrimary.variable} ${fontSecondary.variable} ${fontTertiary.variable} `}>
      <AosInit />
      <VideoProvider >
        {children}
      </VideoProvider>
    </div>
  );
}
