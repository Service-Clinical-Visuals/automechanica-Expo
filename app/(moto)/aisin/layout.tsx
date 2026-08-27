import { Manrope, Inter } from 'next/font/google';
import "./global.css";
import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Aisin - Advanced Automotive Engineering Solutions",
  description: "Aisin Homepage",
};

export default function AisinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`aisin-root ${manrope.variable} ${inter.variable} bg-white text-gray-900`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
