import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import PremiumBrake from "./_components/PremiumBrake";
import Vision from "./_components/Vision";
import Explore360 from "./_components/Explore360";
import OurProducts from "./_components/OurProducts";
import EngineeredBraking from "./_components/EngineeredBraking";
import CertifiedQuality from "./_components/CertifiedQuality";
import Footer from "./_components/Footer";
import HighPerformance from "./_components/HighPerformance";

export default function KaleBalataHomePage() {
  return (
    <>
      <Header />
      <div className="flex flex-col  bg-[#1b1b1b]">
        <Banner />
        <About />
        <PremiumBrake />
        
        <Vision />
        <Explore360 />
        <OurProducts />
        <EngineeredBraking />
        <HighPerformance />
        <CertifiedQuality />
      </div>
      <Footer />
    </>
  );
}
