"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Heritage from "./_components/Heritage";
import Explore360 from "./_components/Explore360";
import MissionVision from "./_components/MissionVision";
import PremiumBrake from "./_components/PremiumBrake";
import OurProducts from "./_components/OurProducts";
import EngineeredBraking from "./_components/EngineeredBraking";
import SolutionsForVehicles from "./_components/SolutionsForVehicles";
import Sustainability from "./_components/Sustainability";
import Footer from "./_components/Footer";

export default function AydotoPage() {
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
      <Heritage />
      <Explore360 />
      <MissionVision />
      <PremiumBrake />
      <OurProducts />
      <EngineeredBraking />
      <SolutionsForVehicles />
      <Sustainability />
      <Footer />
    </main>
  );
}
