"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Explore360 from "./_components/Explore360";
import Products from "./_components/Products";
import EngineeredBraking from "./_components/EngineeredBraking";
import TestingCentre from "./_components/TestingCentre";
import EngineeringExcellence from "./_components/EngineeringExcellence";
import Blogs from "./_components/Blogs";
import Footer from "./_components/Footer";

export default function AsimcoPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full bg-[#000000] overflow-x-hidden overflow-y-hidden">
      <Header />
      <Banner />
      <About />
      <Explore360 />
      <Products />
      <EngineeredBraking />
      <TestingCentre />
      <EngineeringExcellence />
      <Blogs />
      <Footer />
    </main>
  );
}
