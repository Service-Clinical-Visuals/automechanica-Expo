import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontHeading = localFont({
  src: [
    { path: "../../../fonts/big-shoulders/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/big-shoulders/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-bigshoulder",
  display: "swap",
  adjustFontFallback: false,
});


const fontBody = localFont({
  src: [
    { path: "../../../fonts/dm-sans/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/dm-sans/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/dm-sans/600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veedol | The Professional's Choice for Over a Century",
  description: "Endorsed by leading automotive manufacturers worldwide. Explore our high-performance engine oils and lubricants.",
  icons: {
    icon: "/moto/veedol-moto/logo 1.png",
  },
};

export default function VeedolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} antialiased bg-white`}>
      <AosInit />
      <VideoProvider website="veedol-moto">
        <div className="veedol-root overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
