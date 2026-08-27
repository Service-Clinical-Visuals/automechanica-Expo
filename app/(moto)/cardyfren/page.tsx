"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import PrecisionEngineering from "./_components/PrecisionEngineering";
import Products from "./_components/Products";
import Performance from "./_components/Performance";
import Partners from "./_components/Partners";
import Footer from "./_components/Footer";

export default function CardyfrenPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full bg-[#111] overflow-x-hidden overflow-y-hidden">
      <Header />
      <Banner />
      <AboutUs />
      <PrecisionEngineering />
      <Products />
      <Performance />
      <Partners />
      <Footer />
    </main>
  );
}
