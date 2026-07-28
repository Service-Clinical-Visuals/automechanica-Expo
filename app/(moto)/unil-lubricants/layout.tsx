import "./global.css";
import React from "react";
import { VideoProvider } from "@/app/_context/VideoContext";


export const metadata = {
  title: "Unil Lubricants",
  description: "Premium Lubrication Solutions Built for Every Journey",
};

export default function UnilLubricantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#111111] min-h-screen text-white">
     <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
