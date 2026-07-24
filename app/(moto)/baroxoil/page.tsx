"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import FeatureProduct from "./_components/FeatureProduct";
import ExploreProducts from "./_components/ExploreProducts";
import PremiumPerformance from "./_components/PremiumPerformance";
import OurProducts from "./_components/OurProducts";
import EngineProtection from "./_components/EngineProtection";
import Blogs from "./_components/Blogs";
import Footer from "./_components/Footer";

export default function BaroxOilPage() {
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
      <FeatureProduct />
      <ExploreProducts />
      <PremiumPerformance />
      <OurProducts />
      <EngineProtection />
      <Blogs />
      <Footer />
    </main>
  );
}
