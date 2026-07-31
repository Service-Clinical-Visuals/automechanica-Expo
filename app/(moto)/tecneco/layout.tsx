import "./global.css";
import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import { Sora, Lato } from 'next/font/google';

const sora = Sora({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sora',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "Tecneco - Advanced Filtration Solutions",
  description: "Tecneco Homepage",
};

export default function TecnecoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`tecneco-root bg-white text-[#191515] ${sora.variable} ${lato.variable}`}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
