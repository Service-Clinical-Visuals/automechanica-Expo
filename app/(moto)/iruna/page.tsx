"use client";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import BrakeCaliper from "./_components/BrakeCaliper";
import OurProducts from "./_components/OurProducts";
import IndustryWeServe from "./_components/IndustryWeServe";
import BrakeCaliperSolutions from "./_components/BrakeCaliperSolutions";
import OurBrands from "./_components/OurBrands";
import Footer from "./_components/Footer";

export default function IrunaPage() {
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
      <BrakeCaliper />
      <OurProducts />
      <IndustryWeServe />
      <BrakeCaliperSolutions />
      <OurBrands />
      <Footer />
    </main>
  );
}
