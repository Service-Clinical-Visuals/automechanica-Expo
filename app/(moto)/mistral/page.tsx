"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import WhoWeAre from "./_components/WhoWeAre";
import Features from "./_components/Features";
import CabinAirFilter from "./_components/CabinAirFilter";
import InteriorAirFilters from "./_components/InteriorAirFilters";
import ProductRange from "./_components/ProductRange";
import Regulations from "./_components/Regulations";
import Footer from "./_components/Footer";

export default function MistralPage() {
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
      <WhoWeAre />
      <Features />
      <CabinAirFilter />
      <InteriorAirFilters />
      <ProductRange />
      <Regulations />
      <Footer />
    </main>
  );
}
