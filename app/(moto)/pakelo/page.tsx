"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import ProductShowcase from "./_components/ProductShowcase";
import Products from "./_components/Products";
import EngineExcellence from "./_components/EngineExcellence";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";

export default function PakeloHome() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#000033]">
      <Header />
      <Banner />
      <AboutUs />
      <ProductShowcase />
      <Products />
      <EngineExcellence />
      <LatestNews />
      <Footer />
    </main>
  );
}
