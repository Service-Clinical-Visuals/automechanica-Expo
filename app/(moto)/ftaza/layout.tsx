import type { Metadata } from "next";
import { Oswald, Lato } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontBody = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", ],
});

const fontHeading = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
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
