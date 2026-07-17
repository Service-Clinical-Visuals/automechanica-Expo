import "./global.css";
import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";


export const metadata: Metadata = {
  title: "Celikis - Precision Engineering for Industry",
  description: "Celikis Homepage",
};

export default function CelikisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="celikis-root font-cabin bg-white text-gray-900">
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
