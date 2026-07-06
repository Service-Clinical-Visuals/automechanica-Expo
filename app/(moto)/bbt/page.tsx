"use client";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import Features from "./_components/Features";
import PrecisionIgnition from "./_components/PrecisionIgnition";
import ProductRange from "./_components/ProductRange";
import ReliableIgnition from "./_components/ReliableIgnition";
import KaizenPassion from "./_components/KaizenPassion";
import Footer from "./_components/Footer";

export default function BBTPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full bg-[#0c3274] overflow-x-hidden overflow-y-hidden">
      <Header />
      <Banner />
      <AboutUs />
      <PrecisionIgnition />
      <ProductRange />
      <ReliableIgnition />
      <KaizenPassion />
      <Footer />
    </main>
  );
}
