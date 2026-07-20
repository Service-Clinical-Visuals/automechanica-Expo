import type { Metadata } from "next";
import "./global.css";
import { Sora } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";


const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Leprinsol Group",
  description: "Leprinsol Group",
};

export default function LeprinsolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${sora.variable} `}>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
