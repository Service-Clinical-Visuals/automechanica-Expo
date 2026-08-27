import "./global.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SmoothScroll from "./_components/SmoothScroll";
import AOSProvider from "./_components/AOSProvider";
import { VideoProvider } from "@/app/_context/VideoContext";

export const metadata = {
  title: "Ditas BDY",
  description:
    "Ditas BDY is a leading manufacturer of steering and suspension components, delivering high-quality products for the automotive industry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-rubik bg-white text-[#272727]">
      <AOSProvider />
      <SmoothScroll />
      <Header />
      <VideoProvider >
        {children}
      </VideoProvider>
      <Footer />
    </div>
  );
}