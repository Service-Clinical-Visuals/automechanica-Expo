"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./_components/Header";
import Banner from "./_components/Banner";
import WhoWeAre from "./_components/WhoWeAre";
import EngineeredToImpress from "./_components/EngineeredToImpress";
import OurProducts from "./_components/OurProducts";
import DiscoverPerformance from "./_components/DiscoverPerformance";
import Blogs from "./_components/Blogs";
import Footer from "./_components/Footer";

export default function UnilLubricantsPage() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111]">
      <Header />
      <main className="flex-grow">
        <Banner />
        <WhoWeAre />
        <EngineeredToImpress />
        <OurProducts />
        <DiscoverPerformance />
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}
