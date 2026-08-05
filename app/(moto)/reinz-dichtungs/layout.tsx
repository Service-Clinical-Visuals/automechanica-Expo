import "./global.css";
import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";

export const metadata: Metadata = {
  title: "Reinz-Dichtungs - Precision Sealing Solutions",
  description: "Reinz-Dichtungs Homepage",
};

export default function ReinzDichtungsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="reinz-dichtungs-root bg-white text-gray-900 font-poppins">
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
