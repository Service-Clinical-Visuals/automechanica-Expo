import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";


const fontBody = localFont({
  src: [
    { path: "../../../fonts/rubik/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/rubik/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/rubik/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/rubik/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/rubik/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-rubik",
});

const fontHeading = localFont({
  src: [
    { path: "../../../fonts/oswald/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/oswald/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/oswald/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/oswald/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/oswald/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-oswald",
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
