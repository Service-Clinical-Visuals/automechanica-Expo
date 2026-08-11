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

export default function AxiomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-poppins bg-white text-[#111111] min-h-screen relative w-full overflow-x-hidden">
      <SmoothScrollProvider>
        <VideoProvider>
          <Header />
          {children}
          <Footer />
        </VideoProvider>
      </SmoothScrollProvider>
    </div>
  );
}