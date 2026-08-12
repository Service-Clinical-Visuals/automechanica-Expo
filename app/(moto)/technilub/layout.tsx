import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontHeading = localFont({
  src: [
    { path: "../../../fonts/oxanium/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/oxanium/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/oxanium/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/oxanium/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/oxanium/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-oxanium",
});

const fontBody = localFont({
  src: [
    { path: "../../../fonts/instrument-sans/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/instrument-sans/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/instrument-sans/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/instrument-sans/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-instrumentsans",
});

export const metadata: Metadata = {
  title: "Technilub",
  description: "Synmar is a dynamic young Dutch company specialising in high-quality lubricants and technical fluids. From our modern production facility in Lichtenvoorde we serve international markets. Relying on many years of experience, we develop and manufacture all our products entirely in the Netherlands—something we’re proud of, which is why our packaging is marked  “Made in Holland”.",
};



export default function EurolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} antialiased bg-white`}>
      <AosInit />
      <VideoProvider >
        <div className=" overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
