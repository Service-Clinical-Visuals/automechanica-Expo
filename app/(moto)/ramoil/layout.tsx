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
    { path: "../../../fonts/teko/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/teko/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/teko/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/teko/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/teko/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-teko",
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
