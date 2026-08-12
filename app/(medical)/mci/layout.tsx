import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const outfit = localFont({
  src: [
    { path: "../../../fonts/outfit/300.woff2", weight: "300", style: "normal" },
    { path: "../../../fonts/outfit/400.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/outfit/500.woff2", weight: "500", style: "normal" },
    { path: "../../../fonts/outfit/600.woff2", weight: "600", style: "normal" },
    { path: "../../../fonts/outfit/700.woff2", weight: "700", style: "normal" },
    { path: "../../../fonts/outfit/800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/mci/images/fav.png",
  },
  title: "MCI - Medical Concept Innovation inc.",
  description: "Innovative Solutions, Life-Changing Results Through Advanced Medical Technology. Precision Medical Solutions.",
};

import AOSInit from "./_components/AOSInit";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${outfit.variable} min-h-screen bg-white font-sans antialiased overflow-x-hidden relative w-full`}>
      <AOSInit />
      {children}
    </div>
  );
}
