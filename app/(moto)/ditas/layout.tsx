import type { Metadata } from "next";
import "./global.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SmoothScroll from "./_components/SmoothScroll";
import AOSProvider from "@/app/_components/AOSProvider";
import { VideoProvider } from "@/app/_context/VideoContext";

export const metadata: Metadata = {
  title: "Ditas BDY",
  description:
    "Ditas BDY is a leading manufacturer of steering and suspension components, delivering high-quality products for the automotive industry.",
};

export default function DitasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-rubik bg-white text-[#272727] min-h-screen flex flex-col">
      <VideoProvider>
        <AOSProvider>
          <SmoothScroll />
          <Header />
          <main className="flex-grow w-full">{children}</main>
          <Footer />
        </AOSProvider>
      </VideoProvider>
    </div>
  );
}