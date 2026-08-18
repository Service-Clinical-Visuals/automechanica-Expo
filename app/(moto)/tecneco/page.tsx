"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import AboutUs from "./_components/AboutUs";
import Explore360 from "./_components/Explore360";
import OurProducts from "./_components/OurProducts";
import AdvancedFiltration from "./_components/AdvancedFiltration";
import OneStopPoint from "./_components/OneStopPoint";
import EngineeredQuality from "./_components/EngineeredQuality";
import PrecisionFilter from "./_components/PrecisionFilter";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Banner from "./_components/Banner";

export default function TecnecoPage() {
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
      <Explore360 />
      <OurProducts />
      <AdvancedFiltration />
      <OneStopPoint />
      <EngineeredQuality />
      <PrecisionFilter />
      <LatestNews />
      <Footer />
    </main>
  );
}
