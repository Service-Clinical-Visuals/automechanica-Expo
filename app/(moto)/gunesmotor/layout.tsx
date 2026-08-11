import type { Metadata } from "next";
import { Oswald, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Smooth from "./_components/Smooth";
import { VideoProvider } from "@/app/_context/VideoContext";


const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${oswald.variable} ${rubik.variable}`}>
      <body>
        <Smooth>
          <Navbar />
          <VideoProvider>
          {children}
          </VideoProvider>
          <Footer />
        </Smooth>
      </body>
    </html>
  );
}