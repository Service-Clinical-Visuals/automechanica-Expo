import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontHeading = DM_Sans({
  subsets: ["latin"],
  weight: ["300" ,"400", "500", "600", "700"],
  variable: "--font-dmsans",
  display: "swap",
  adjustFontFallback: false,
});

const fontBody = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});



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
