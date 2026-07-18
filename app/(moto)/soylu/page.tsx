"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";


import AboutUs from "./_components/AboutUs";
import PremiumIgnitionCoils from "./_components/PremiumIgnitionCoils";
import ProductRange from "./_components/ProductRange";
import PrecisionIgnition from "./_components/PrecisionIgnition";
import Advantages from "./_components/Advantages";
import GlobalReachSection from "./_components/GlobalReachSection";
import Footer from "./_components/Footer";

export default function BremiPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full bg-white overflow-x-hidden overflow-y-hidden">
      <Header />
      <Banner />
      <AboutUs />
      <PremiumIgnitionCoils />
      <ProductRange />
      <PrecisionIgnition />
      <Advantages />
      <GlobalReachSection />
      <Footer />
    </main>
  );
}
