"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "./_components/About";
import Explore360 from "./_components/Explore360";
import OurSolutions from "./_components/OurSolutions";
import PremiumEngine from "./_components/PremiumEngine";
import PrecisionLogistics from "./_components/PrecisionLogistics";
import EngineeredPerformance from "./_components/EngineeredPerformance";
import Oilfinder from "./_components/Oilfinder";
import GlobalPartners from "./_components/GlobalPartners";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Banner from "./_components/Banner";

export default function JbGermanoilPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full bg-white overflow-x-hidden">
      <Header />
      <Banner />
      <About />
      <Explore360 />
      <OurSolutions />
      <PremiumEngine />
      <PrecisionLogistics />
      <EngineeredPerformance />
      <Oilfinder />
      <GlobalPartners />
      <Footer />
    </main>
  );
}
