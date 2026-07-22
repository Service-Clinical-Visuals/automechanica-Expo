"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import PrecisionEngine from "./_components/PrecisionEngine";
import Products from "./_components/Products";
import EngineeringMotion from "./_components/EngineeringMotion";
import Catalogue from "./_components/Catalogue";
import Footer from "./_components/Footer";

export default function IjsGroupPage() {
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
      <AboutUs />
      <PrecisionEngine />
      <Products />
      <EngineeringMotion />
      <Catalogue />
      <Footer />
    </main>
  );
}
