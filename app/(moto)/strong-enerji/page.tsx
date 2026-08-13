"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import PrecisionManufacturing from "./_components/PrecisionManufacturing";
import ProductPortfolio from "./_components/ProductPortfolio";
import Technology from "./_components/Technology";
import GlobalPresence from "./_components/GlobalPresence";
import PerformanceFeatures from "./_components/PerformanceFeatures";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function StrongEnerjiPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full bg-[#0c1e40] overflow-x-hidden overflow-y-hidden">
      <Header />
      <Banner />
      <AboutUs />
      <PrecisionManufacturing />
      <ProductPortfolio />
      <Technology />
      <GlobalPresence />
      <PerformanceFeatures />
      <Contact />
      <Footer />
    </main>
  );
}
