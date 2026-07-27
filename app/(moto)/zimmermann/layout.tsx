import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";


const fontBody = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fontHeading = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Chemnaft",
  description: "Synmar is a dynamic young Dutch company specialising in high-quality lubricants and technical fluids. From our modern production facility in Lichtenvoorde we serve international markets. Relying on many years of experience, we develop and manufacture all our products entirely in the Netherlands—something we’re proud of, which is why our packaging is marked  “Made in Holland”.",
};



export default function EurolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontBody.variable} ${fontHeading.variable} antialiased bg-white`}>
      <AosInit />
      <VideoProvider >
        <div className=" overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
