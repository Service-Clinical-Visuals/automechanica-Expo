import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Smooth from "./_components/Smooth";
import { VideoProvider } from "@/app/_context/VideoContext";


const oswald = localFont({
  src: [
    { path: "../../../fonts/oswald/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/oswald/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/oswald/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/oswald/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-oswald",
});

const rubik = localFont({
  src: [
    { path: "../../../fonts/rubik/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/rubik/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/rubik/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/rubik/700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Güneş Motor Supapları",
  description: "Landing Page",
  icons: {
    icon: "/logo.png",
  },
};

// Gunes motor
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`gunesmotor-root ${oswald.variable} ${rubik.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>
      <Smooth>
        <Navbar />
        <VideoProvider>
        {children}
        </VideoProvider>
        <Footer />
      </Smooth>
    </div>
  );
}