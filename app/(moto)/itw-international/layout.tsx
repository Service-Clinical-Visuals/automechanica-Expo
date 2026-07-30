import "./global.css";
import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";

export const metadata: Metadata = {
  title: "ITW International - Leading the Future of Lubrication",
  description: "ITW International Homepage",
};

export default function ItwInternationalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="itw-international-root font-oswald bg-white text-gray-900">
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
