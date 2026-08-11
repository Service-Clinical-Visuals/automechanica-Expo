import "./global.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SmoothScrollProvider from "./_components/SmoothScroller";
import { VideoProvider } from "@/app/_context/VideoContext";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AXIOM Autotech Inc.",
  description: "AXIOM Autotech Inc. Homepage",
  icons: {
    icon: "/moto/axiom/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins bg-white text-[#111111]">
        <SmoothScrollProvider>
          <VideoProvider>
            <Header />
            {children}
            <Footer />
          </VideoProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}