"use client";

import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import EngineOil from "./_components/EngineOil";
import ProductRange from "./_components/ProductRange";
import OurValues from "./_components/OurValues";
import RexoilEngineOils from "./_components/RexoilEngineOils";
import News from "./_components/News";
import Footer from "./_components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RexoilPage() {
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
      <About />
      <EngineOil />
      <ProductRange />
      <OurValues />
      <RexoilEngineOils />
      <News />      
      <Footer />
    </main>
  );
}
